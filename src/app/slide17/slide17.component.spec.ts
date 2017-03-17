import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide17Component } from './slide17.component';

describe('Slide17Component', () => {
  let component: Slide17Component;
  let fixture: ComponentFixture<Slide17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
