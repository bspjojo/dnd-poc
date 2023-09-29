import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grid',
    loadChildren: () => import('./grid-control/grid-control-routing.module').then(m => m.GridControlRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'grid'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
