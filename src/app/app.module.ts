import { SpeechRecognizerService } from './services/speech-recognizer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { RecordMicComponent } from './record-mic/record-mic.component';
import { HttpClientModule } from '@angular/common/http';
import { WebSpeechApiService } from './services/web-speech-api.service';
import { VoiceRecognizerComponent } from './voice-recognizer/voice-recognizer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    RecordMicComponent,
    VoiceRecognizerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WebSpeechApiService,
    SpeechRecognizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
