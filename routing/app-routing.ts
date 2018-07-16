import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component'
/*export const routes: Routes = [
  /!*{ path: 'billingComponent', loadChildren: 'app/billing/billing.module#BillingModule' },*!/
  {path: 'Test' , loadChildren: DatatableComponent} ,
    {path: 'Recipe' , component: RecipeComponent}
];*/

export const routes: Routes = [
  {path: '' , component: HomeComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
