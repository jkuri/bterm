import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/jasmine-patch';

import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
let Application = require('spectron').Application;
const { resolve } = require('path');


describe(`AppTopHeaderComponent`, () => {
  // let comp: AppTopHeaderComponent;
  // let fixture: ComponentFixture<AppTopHeaderComponent>;
  // let de: DebugElement;
  // let el: HTMLElement;
  let app: any;

  beforeEach(async(() => {
      app = new Application({
        path: resolve(__dirname, '../../dist')
      });
  }));

  it(`should be readly initialized`, () => {

    app.start().then(function () {
      console.log(app.browserWindow.isVisible);
      return app.browserWindow.isVisible()
    }).then(function (isVisible) {
      //assert.equal(isVisible, true)
    }).then(function () {
      return app.client.getTitle()
    }).then(function (title) {
      //assert.equal(title, 'My App')
    }).then(function () {
      return app.stop()
    }).catch(function (error) {
      //console.error('Test failed', error.message)
    })


    // fixture.detectChanges();
    // expect(fixture).toBeDefined();
    // expect(comp).toBeDefined();
  });

});
