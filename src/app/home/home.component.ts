import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  values = [
  { id: 3432, name: "Recent" },
  { id: 3442, name: "Most Popular" },
  { id: 3352, name: "Rating" }
];

public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }

}
