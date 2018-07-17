import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewellhomeComponent } from './jewellhome.component';

describe('JewellhomeComponent', () => {
  let component: JewellhomeComponent;
  let fixture: ComponentFixture<JewellhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewellhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewellhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
