import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//routing
import {AppRoutingModule} from './routing/app-routing'
//bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/core/navbar/navbar.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
