import { NgModule } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
//routing
import {jewellRoutingModule} from './jewellrouting'
//bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
//components
import{Jewell1Component} from './jewell1.component'
import{Test1Component} from './test1/test1.component'


//firebase
import { AngularFireModule } from 'angularfire2';

import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
//services

//marerial

@NgModule({
  declarations: [
    Jewell1Component,
    Test1Component


  ],
  imports: [

    jewellRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule



  ],
  providers: [
   AngularFirestore,
    AngularFireDatabase,]
})
export class Jewell1Module { }
