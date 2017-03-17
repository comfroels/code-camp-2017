import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide30Component } from './slide30.component';

describe('Slide30Component', () => {
  let component: Slide30Component;
  let fixture: ComponentFixture<Slide30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
