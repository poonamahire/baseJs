import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcalcComponent } from './newcalc.component';

describe('NewcalcComponent', () => {
  let component: NewcalcComponent;
  let fixture: ComponentFixture<NewcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
