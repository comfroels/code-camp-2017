import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide24Component } from './slide24.component';

describe('Slide24Component', () => {
  let component: Slide24Component;
  let fixture: ComponentFixture<Slide24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
