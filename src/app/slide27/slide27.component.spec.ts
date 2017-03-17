import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide27Component } from './slide27.component';

describe('Slide27Component', () => {
  let component: Slide27Component;
  let fixture: ComponentFixture<Slide27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
