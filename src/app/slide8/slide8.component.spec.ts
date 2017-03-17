import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide8Component } from './slide8.component';

describe('Slide8Component', () => {
  let component: Slide8Component;
  let fixture: ComponentFixture<Slide8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
