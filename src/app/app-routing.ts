import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import{SubCatComponent} from './home/sub-cat/sub-cat.component'
export const routes: Routes = [

   {path: '' , component: HomeComponent} ,
   {path: 'rings' , component: SubCatComponent},
   /*{path:'ring1',loadChildren:"app/home/jewell/jewell.module#JewellModule"},*/
   {path:'Jewell',loadChildren:"app/home/jewell1/jewell1.module#Jewell1Module"},

   {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
