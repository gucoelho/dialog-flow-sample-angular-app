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

  @Output() send = new EventEmitter<string>();

  constructor(private service: WebSpeechApiService) { }

  ngOnInit() {
  }

  toggleRecording() {
    this.isRecording ? this.stopRecording() : this.startRecording();
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
    this.service.stopRecording();
    this.isRecording = false;
  }

  completeTranscription() {
    console.log('complete');
    this.isRecording = false;
    if (this.transcription) {
      this.send.emit(this.transcription);
    }
    this.transcription = '';
  }
}
