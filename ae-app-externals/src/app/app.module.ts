import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { Widget1Component } from './elements/widget1/widget1.component';

@NgModule({
  declarations: [
    AppComponent,
    Widget1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [Widget1Component]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(Widget1Component, {injector: this.injector});
    customElements.define('ae-widget1', el);
  }
}
