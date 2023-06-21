/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartJSComponent } from './ChartJS.component';

describe('ChartJSComponent', () => {
  let component: ChartJSComponent;
  let fixture: ComponentFixture<ChartJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
