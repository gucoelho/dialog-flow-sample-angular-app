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

  private stream: MediaStream;
  private recordRTC: any;

  constructor(private recognizer: SpeechRecognizerService) { }

  ngOnInit() {
  }

  errorCallback() {}

  successCallback(stream: MediaStream) {
    const options = {
      mimeType: 'audio/flac'
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
    let recordedBlob: string;

    this.recordRTC.stopRecording(function() {
      recordedBlob = this.getBlob();
      this.getDataURL((dataURL) => {});
    });
    this.isRecording = false;
    this.stream.getAudioTracks().forEach(track => track.stop());


    // TODO: TEST SPEECH API
    // let transcription: string;


    // this.recognizer.recognize(btoa(recordedBlob))
    //  .then( data => console.log(data) )
    //  .catch( err => console.log(err) );

    // console.log(transcription);
  }

  download() {
    this.recordRTC.save('audio.flac');
  }

}
