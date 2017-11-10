import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';

interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class WebSpeechApiService {
    speechRecognition: any;

    constructor(private zone: NgZone) {
    }

    startRecording(): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;

            this.speechRecognition = new webkitSpeechRecognition();
            // this.speechRecognition = SpeechRecognition;
            this.speechRecognition.continuous = true;
            this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'pt-BR';
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = speech => {
                let term = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    term = transcript;
                    console.log(term);
                }
                this.zone.run(
                  () => observer.next(term)
                );
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onspeechend = () => {
                observer.complete();
            };

            this.speechRecognition.onend = () => {
                observer.complete();
            };

            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }

    stopRecording() {
        if (this.speechRecognition) { this.speechRecognition.stop(); }
    }

}
