import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JewellhomeComponent} from './jewellhome/jewellhome.component'
const routes: Routes = [
 {path: '' , component: JewellhomeComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JewellRoutingModule { }
