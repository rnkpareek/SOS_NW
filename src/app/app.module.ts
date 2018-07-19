import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//routing
import {AppRoutingModule} from './app-routing'
//bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/core/navbar/navbar.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { SubCatComponent } from './home/sub-cat/sub-cat.component';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
//services
import{subcatService} from './home/sub-cat/subcat.services'
import {jewellService} from './home/fireservices/jewell.service';
//extra
//ngxbootsrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//marerial

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SubCatComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()



  ],
  providers: [subcatService,jewellService,
   AngularFirestore,
    AngularFireDatabase,],
  bootstrap: [AppComponent]
})
export class AppModule { }
