import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jewell1Component } from './jewell1.component';

describe('Jewell1Component', () => {
  let component: Jewell1Component;
  let fixture: ComponentFixture<Jewell1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jewell1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jewell1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
