import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw/draw.component';


@NgModule({
  declarations: [
    DrawComponent
  ],
  imports: [
    CommonModule,
    DrawRoutingModule
  ]
})
export class DrawModule { }
