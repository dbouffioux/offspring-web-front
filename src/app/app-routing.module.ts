import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  {
    path: 'events', loadChildren: '../event/event.module#EventModule'
  },
  {
    path: 'person', loadChildren: '../person/person.module#PersonModule'
  },
  { path: '**', redirectTo: 'events'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
