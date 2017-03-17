import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide25Component } from './slide25.component';

describe('Slide25Component', () => {
  let component: Slide25Component;
  let fixture: ComponentFixture<Slide25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
