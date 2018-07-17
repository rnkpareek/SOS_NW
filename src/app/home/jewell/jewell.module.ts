import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JewellRoutingModule } from './jewell-routing.module';
import { JewellhomeComponent } from './jewellhome/jewellhome.component';

@NgModule({
  imports: [
    CommonModule,
    JewellRoutingModule
  ],
  declarations: [JewellhomeComponent]
})
export class JewellModule { }
