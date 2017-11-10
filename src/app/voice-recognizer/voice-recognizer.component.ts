import { SpeechClient } from '@google-cloud/speech';
import { Observable } from 'rxjs/Rx';
import { WebSpeechApiService } from './../services/web-speech-api.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'voice-recognizer',
  templateUrl: './voice-recognizer.component.html',
  styleUrls: ['./voice-recognizer.component.css']
})
export class VoiceRecognizerComponent implements OnInit {

  isRecording: boolean;
  duration: number;
  transcription: string;
  isKeyboardActivated: boolean;
  ticks: number;

  @Output('send') send = new EventEmitter<string>();

  constructor(private service: WebSpeechApiService) { }

  ngOnInit() { }

  toggleRecording() {
    this.isRecording ? this.stopRecording() : this.startRecording();
  }

  sendMessage(message) {
    this.send.emit(message.target.value);
    message.target.value = '';
  }

  startRecording() {
    this.service.startRecording().subscribe(
      data => this.transcription = data,
      err => console.log(err),
      () => this.completeTranscription()
    );
    this.isRecording = true;
  }

  stopRecording() {
    this.completeTranscription();
    this.service.stopRecording();
  }

  completeTranscription() {
    console.log('complete');
    this.isRecording = false;
    this.send.emit(this.transcription);
    this.transcription = '';
  }

  toggleKeyboard() {
    this.isKeyboardActivated = !this.isKeyboardActivated;
  }

}
