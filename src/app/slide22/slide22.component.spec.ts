import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide22Component } from './slide22.component';

describe('Slide22Component', () => {
  let component: Slide22Component;
  let fixture: ComponentFixture<Slide22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
