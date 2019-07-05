import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './container/event/event.component';
import { ActivityItemComponent } from './component/activity-item/activity-item.component';
import { CreateActivityFormComponent } from './component/create-activity-form/create-activity-form.component';
import { UpdateActivityFormComponent } from './component/update-activity-form/update-activity-form.component';

const routes: Routes = [
    {
      path: '',
      component: EventComponent,
    },
    /*{
      path: ':id',
      component: EventItemComponent,
    }, */
    {
      path: ':createActivity',
      component: CreateActivityFormComponent,
    },
     {
      path: 'update-activity/:id',
      component: UpdateActivityFormComponent,
    },
    {
      path: 'activity/:id',
      component: ActivityItemComponent,
    },
    {
      path: '/activity/',
      component: ActivityItemComponent,
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
