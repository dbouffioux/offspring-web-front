import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'activity', pathMatch: 'full' },
  {
    path: 'activity', loadChildren: '../event/event.module#EventModule'
  },
  { path: '**', redirectTo: 'activity'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
