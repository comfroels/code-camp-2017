import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide18Component } from './slide18.component';

describe('Slide18Component', () => {
  let component: Slide18Component;
  let fixture: ComponentFixture<Slide18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
