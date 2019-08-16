import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Consumer App Build on Angular 5</h1>
    <ae-widget1></ae-widget1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
