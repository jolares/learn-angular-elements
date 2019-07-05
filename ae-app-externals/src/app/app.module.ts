import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { Widget1Component } from './elements/widget1/widget1.component';

@NgModule({
  declarations: [
    Widget1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [Widget1Component]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(Widget1Component, {injector: this.injector});
    customElements.define('ae-widget1', el);
  }
}
