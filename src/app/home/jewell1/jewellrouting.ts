import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{Jewell1Component} from './jewell1.component';
import{Test1Component} from './test1/test1.component';


export const routes: Routes = [

 { path: '', component: Jewell1Component ,
    children: [
      { path: '', redirectTo: 'jewell', pathMatch: 'full' },

      {
        path: 'ring',
        component: Test1Component
      },

    ]
  }






  ];



export const jewellRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);


