import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { ActivityService } from './services/activity.service';
import { ActivityComponent } from './container/activity/activity.component';
import { EventComponent } from './container/event/event.component';
import { EventService } from './services/event.service';
import { EventItemComponent } from './component/event-item/event-item.component';
import { ActivityItemComponent } from './component/activity-item/activity-item.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';
import { CreateActivityFormComponent } from './container/createActivityForm/createActivityForm.component';
import { CreateEventFormComponent } from './component/create-event-form/create-event-form.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    ActivityComponent,
    EventComponent,
    EventItemComponent,
    ActivityItemComponent,
    ActivityListComponent,
    CreateActivityFormComponent,
    CreateEventFormComponent
  ],
  providers: [
    ActivityService,
    EventService
  ]
})
export class EventModule { }
