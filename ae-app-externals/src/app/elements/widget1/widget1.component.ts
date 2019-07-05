import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ae-widget1',
  template: `
    <p>
      widget1 works!
    </p>
  `,
  styleUrls: ['./widget1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Widget1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
