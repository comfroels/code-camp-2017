import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide19Component } from './slide19.component';

describe('Slide19Component', () => {
  let component: Slide19Component;
  let fixture: ComponentFixture<Slide19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
