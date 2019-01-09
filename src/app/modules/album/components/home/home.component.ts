import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style
} from '@angular/animations';

@Component({
  selector: 'nx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInUp', [

      state('void', style({
        transform: 'translateX(-100%)'
      })),

      transition(':enter, :leave', [ // void <=> *
        animate('300ms 0ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
