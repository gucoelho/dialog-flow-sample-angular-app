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
  
  constructor() { }

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
    this.recordRTC.stopRecording(function() {
      let recordedBlob = this.getBlob();
      this.getDataURL((dataURL) => {});
    });
    this.isRecording = false;
    this.stream.getAudioTracks().forEach(track => track.stop());
  }

  download() {
    this.recordRTC.save('audio.flac');
  }

}
