import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide21Component } from './slide21.component';

describe('Slide21Component', () => {
  let component: Slide21Component;
  let fixture: ComponentFixture<Slide21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
