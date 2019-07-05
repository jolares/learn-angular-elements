import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'ae-widget1',
  template: `
    <mat-card>
      This is a material card
    </mat-card>
    <mat-select>
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{food.viewValue}}
    </mat-option>
    </mat-select>
    <p class='test'>
      widget1 works!
    </p>
  `,
  styleUrls: ['./widget1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Widget1Component implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
