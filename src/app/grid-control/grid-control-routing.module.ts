import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridControlComponent } from './grid-control.component';

const routes: Routes = [
  {
    path: '',
    component: GridControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridControlRoutingModule { }
