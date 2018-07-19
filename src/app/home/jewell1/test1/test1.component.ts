import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    var routers=this._router.url;
    console.log("------------",routers)
  }

}
