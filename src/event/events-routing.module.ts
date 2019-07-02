import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './container/event/event.component';
import { EventItemComponent } from './component/event-item/event-item.component';
import { ActivityItemComponent } from './component/activity-item/activity-item.component';

const routes: Routes = [
    {
      path: '',
      component: EventComponent,
    },
    {
      path: ':id',
      component: EventItemComponent,
    },
    {
      path: 'activity/:id',
      component: ActivityItemComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
