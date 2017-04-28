import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe(`AppTopHeaderComponent`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it(`should be readly initialized`, () => {
    fixture.detectChanges();
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

});
