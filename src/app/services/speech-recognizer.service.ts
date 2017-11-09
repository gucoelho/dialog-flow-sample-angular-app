import { Injectable } from '@angular/core';
import { SpeechClient } from '@google-cloud/speech';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SpeechRecognizerService {

  private URL = 'https://speech.googleapis.com/v1/speech:recognize';
  private API_KEY: string;

  constructor(private http: HttpClient) {
    this.API_KEY = 'AIzaSyCMrctHNjThHvWT0g-iMnTPx__IL21nRTc'; // TODO: API KEY TO ENVIRONMENT VAR
  }

  recognize(audio) {

    const audioParam = {
      content: audio,
    };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'pt-BR',
    };
    const body = {
      audio: audioParam,
      config: config,
    };

    console.log(body);

    // TODO: TO OBSERVABLE
    return this.http.post(this.URL, body, {
      params: new HttpParams().set('key', this.API_KEY),
    });
  }

}
