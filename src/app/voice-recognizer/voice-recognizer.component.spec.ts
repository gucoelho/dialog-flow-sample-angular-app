import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRecognizerComponent } from './voice-recognizer.component';

describe('VoiceRecognizerComponent', () => {
  let component: VoiceRecognizerComponent;
  let fixture: ComponentFixture<VoiceRecognizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceRecognizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRecognizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
