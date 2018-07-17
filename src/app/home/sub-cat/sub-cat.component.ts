import { Component, OnInit } from '@angular/core';
import {subcatService} from './subcat.services';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css']
})
export class SubCatComponent implements OnInit {
  data:any;
  constructor(private subcatservice:subcatService) { }
  datas=[];

  ngOnInit() {
   this.subcatservice.getjewlldata();

    this.subcatservice.getjewlldata().subscribe(notes =>{

    this.data=notes;
    console.log("==========",this.data.length)
    console.log("-------------",this.data[0]["menu_id"])
   })

  }

}
