import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridControlComponent } from './grid-control.component';

@NgModule({
  declarations: [
    GridControlComponent
  ],
  exports: [
    GridControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridControlModule { }
