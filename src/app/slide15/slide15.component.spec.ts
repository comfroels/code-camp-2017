import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide15Component } from './slide15.component';

describe('Slide15Component', () => {
  let component: Slide15Component;
  let fixture: ComponentFixture<Slide15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
