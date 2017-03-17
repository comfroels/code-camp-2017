import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide14Component } from './slide14.component';

describe('Slide14Component', () => {
  let component: Slide14Component;
  let fixture: ComponentFixture<Slide14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
