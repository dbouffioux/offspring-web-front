import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from 'src/event/models/event.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Activity } from 'src/event/models/activity.model';

@Component({
  selector: 'app-create-activity-form',
  templateUrl: './create-activity-form.component.html',
  styleUrls: ['./create-activity-form.component.css']
})
export class CreateActivityFormComponent implements OnInit {

  public events: Event[];
  public activity: Activity;
  public createActivityForm: FormGroup;

  constructor(private eventService: EventService, private fb: FormBuilder) {
    this.activity = new Activity();
    this.createActivityForm = this.fb.group({
      name: this.fb.control(this.event.name, [Validators.required]),
      dateDebut: this.fb.control(this.event.dateDebut, [Validators.required]),
      dateFin: this.fb.control(this.event.dateFin, [Validators.required]),
      heureDebut: this.fb.control(this.event.heureDebut, [Validators.required]),
      heureFin: this.fb.control(this.event.heureFin, [Validators.required]),
    });
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

}
