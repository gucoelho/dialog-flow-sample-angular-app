import { TestBed, inject } from '@angular/core/testing';

import { WebSpeechApiService } from './web-speech-api.service';

describe('WebSpeechApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSpeechApiService]
    });
  });

  it('should be created', inject([WebSpeechApiService], (service: WebSpeechApiService) => {
    expect(service).toBeTruthy();
  }));
});
