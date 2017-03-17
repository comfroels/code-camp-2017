import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide23Component } from './slide23.component';

describe('Slide23Component', () => {
  let component: Slide23Component;
  let fixture: ComponentFixture<Slide23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
