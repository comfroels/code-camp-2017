import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide29Component } from './slide29.component';

describe('Slide29Component', () => {
  let component: Slide29Component;
  let fixture: ComponentFixture<Slide29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
