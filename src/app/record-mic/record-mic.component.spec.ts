import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMicComponent } from './record-mic.component';

describe('RecordMicComponent', () => {
  let component: RecordMicComponent;
  let fixture: ComponentFixture<RecordMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
