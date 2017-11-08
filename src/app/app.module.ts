import { SpeechRecognizerService } from './services/speech-recognizer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { RecordMicComponent } from './record-mic/record-mic.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    RecordMicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    SpeechRecognizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
