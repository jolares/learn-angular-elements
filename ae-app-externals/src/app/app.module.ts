import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

import { Widget1Component } from './elements/widget1/widget1.component';


@NgModule({
  declarations: [
    Widget1Component
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule
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
