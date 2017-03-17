import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide20Component } from './slide20.component';

describe('Slide20Component', () => {
  let component: Slide20Component;
  let fixture: ComponentFixture<Slide20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
