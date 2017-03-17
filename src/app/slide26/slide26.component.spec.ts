import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide26Component } from './slide26.component';

describe('Slide26Component', () => {
  let component: Slide26Component;
  let fixture: ComponentFixture<Slide26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
