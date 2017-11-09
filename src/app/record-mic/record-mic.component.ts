import { WebSpeechApiService } from './../services/web-speech-api.service';
import { SpeechRecognizerService } from './../services/speech-recognizer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import RecordRTC from 'recordrtc';

@Component({
  selector: 'record-mic',
  templateUrl: './record-mic.component.html',
  styleUrls: ['./record-mic.component.css']
})
export class RecordMicComponent implements OnInit {

  isRecording: boolean;
  duration: number;
  transcription: any;
  private stream: MediaStream;
  private recordRTC: any;

  constructor(private recognizer: SpeechRecognizerService,
              private webapi: WebSpeechApiService) { }

  ngOnInit() {
  }

  get label() {
    return this.isRecording ? 'Stop' : 'Start';
  }

  record() {
    this.webapi.startRecording().subscribe(
      data => this.transcription = data
    );
  }

  errorCallback() {}

  toggleRecording() {
    this.isRecording ? this.stopRecording() : this.startRecording();
  }

  successCallback(stream: MediaStream) {
    const options = {
      mimeType: 'audio/webm'
    };
    this.stream = stream;
    this.recordRTC = new RecordRTC(stream, options);
    this.recordRTC.startRecording();
  }

  startRecording() {
    const mediaConstraints = {video: false, audio: true};

    this.isRecording = true;

    navigator.mediaDevices.getUserMedia(mediaConstraints)
        .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    let blob: Blob;
    const that = this;
    this.recordRTC.stopRecording(function() {
      blob = this.getBlob();

      this.getDataURL((dataURL) => that.recognize(dataURL));
    });

    this.isRecording = false;
    this.stream.getAudioTracks().forEach(track => track.stop());

    // TODO: TEST SPEECH API
    // let transcription: string;

  }

  recognize(audioURL) {
    this.recognizer.recognize(audioURL.split(',')[1])
      .subscribe(
         data => this.setTranscription(data),
         err => console.log(err)
        );
  }

  setTranscription(transcription) {
    console.log(transcription);
    this.transcription = transcription;
  }
}
