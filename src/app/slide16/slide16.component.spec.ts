import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide16Component } from './slide16.component';

describe('Slide16Component', () => {
  let component: Slide16Component;
  let fixture: ComponentFixture<Slide16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
