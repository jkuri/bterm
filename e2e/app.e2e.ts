import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
let Application = require('spectron').Application;


describe(`AppTopHeaderComponent`, () => {
  // let comp: AppTopHeaderComponent;
  // let fixture: ComponentFixture<AppTopHeaderComponent>;
  // let de: DebugElement;
  // let el: HTMLElement;
  let app: any;

  beforeEach(async(() => {
      app = new Application({
        path: '/Applications/bterm.app/Contents/MacOS/bterm'
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
