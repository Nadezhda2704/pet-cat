import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'draw',
    loadChildren: () => import('./draw/draw.module').then((m) => m.DrawModule)
  },
  {
    path: 'statistic',
    loadChildren: () => import('./statistic/statistic.module').then((m) => m.StatisticModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
