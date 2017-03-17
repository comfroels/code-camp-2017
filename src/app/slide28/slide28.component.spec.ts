import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide28Component } from './slide28.component';

describe('Slide28Component', () => {
  let component: Slide28Component;
  let fixture: ComponentFixture<Slide28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
