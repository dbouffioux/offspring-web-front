import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { ActivityService } from './services/activity.service';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ActivityComponent],
  providers: [ActivityService]
})
export class EventModule { }
