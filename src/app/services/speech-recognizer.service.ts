import { Injectable } from '@angular/core';
import { SpeechClient } from '@google-cloud/speech';
import { Http } from '@angular/http';

@Injectable()
export class SpeechRecognizerService {

  private URL = 'https://speech.googleapis.com/v1/speech:recognize';
  private API_KEY: string;

  constructor(private http: Http) {
    this.API_KEY = ''; // TODO: API KEY TO ENVIRONMENT VAR
  }

  getURL() {
    return this.URL + '?key=' + this.API_KEY;
  }

  recognize(audio) {

    const audioParam = {
      content: audio,
    };
    const config = {
      encoding: 'FLAC',
      sampleRateHertz: 16000,
      languageCode: 'pt-BR',
    };
    const body = {
      audio: audioParam,
      config: config,
    };
    // TODO: TO OBSERVABLE
    return this.http.post(this.getURL(), body).toPromise();
  }

}
