import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from 'src/event/models/event.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/event/models/activity.model';
import { ActivityService } from '../../services/activity.service';
import { AuthenticationService } from '../../../person/services/authentication.service';
import DateUtilsComponent from 'src/app/utils/DateUtilsComponent';

@Component({
  selector: 'app-create-activity-form',
  templateUrl: './create-activity-form.component.html',
  styleUrls: ['./create-activity-form.component.scss']
})
export class CreateActivityFormComponent implements OnInit {

  public events: Event[];
  public event: Event;
  public activity: Activity;
  public createActivityForm: FormGroup;
  public dateMin: string;
  public dateMax: string;
  public heureMin: string;
  public heureMax: string;

  constructor(
    private authenticationService: AuthenticationService,
    private eventService: EventService,
    private fb: FormBuilder,
    private activityService: ActivityService) {

    this.activity = new Activity();
    this.createActivityForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      event: this.fb.control('', [Validators.required]),
      dateDebut: this.fb.control('', [Validators.required]),
      dateFin: this.fb.control('', [Validators.required]),
      heureDebut: this.fb.control('', [Validators.required]),
      heureFin: this.fb.control('', [Validators.required]),
    });

    this.createActivityForm.get('event').valueChanges.subscribe(event => this.onEventChange(event));
  }

  public onSubmit() {
    const val = this.createActivityForm.value;
    this.activity.name = val.name;
    this.activity.eventId = val.event;
    this.activity.dateDebut = val.dateDebut;
    this.activity.dateFin = val.dateFin;
    this.activity.heureDebut = val.heureDebut + ':00';
    this.activity.heureFin = val.heureFin + ':00';
    this.activity.creatorId = this.authenticationService.getLoggedInUser();

    const result = this.activityService.postActivity(this.activity);
    result.subscribe();
    /*
    result.subscribe(res => {
      this.res = res;
      if (this.res.error !== undefined) {
        this.error = this.res.error;
      } else if (this.res.id !== undefined) {
        this.authenticationService.setLoggedInUser(this.res.id);
        this.router.navigate(['/']);
      }
    });
    */
  }

  // watch for event change
  onEventChange(eventId: any) {
    // get event selected if event valid
    if (!eventId.isNan) {
      this.eventService.getEventById(eventId).subscribe(
        event => {
          this.event = event;
          this.dateMin = DateUtilsComponent.formatDateToStringDate(
              DateUtilsComponent.createDateFromParams(event.start) // error because Event has no 'start' field .. but thats what api
            );
          this.dateMax = DateUtilsComponent.formatDateToStringDate(
              DateUtilsComponent.createDateFromParams(event.end)
            );
          this.heureMin = DateUtilsComponent.formatDateToStringTime(
              DateUtilsComponent.createDateFromParams(event.start)
            );
          this.heureMax = DateUtilsComponent.formatDateToStringTime(
            DateUtilsComponent.createDateFromParams(event.end)
          );
        }
      );
    }
  }

  hasNameError() {
    const control = this.createActivityForm.get('name');
    return control.errors && control.errors.required;
  }

  hasDateDebutError() {
    const control = this.createActivityForm.get('dateDebut');
    return control.errors && control.errors.required;
  }

  hasDateFinError() {
    const control = this.createActivityForm.get('dateFin');
    return control.errors && control.errors.required;
  }

  hasHeureDebutError() {
    const control = this.createActivityForm.get('heureDebut');
    return control.errors && control.errors.required;
  }

  hasHeureFinError() {
    const control = this.createActivityForm.get('heureFin');
    return control.errors && control.errors.required;
  }

  hasEventError() {
    const control = this.createActivityForm.get('event');
    return control.errors && control.errors.required;
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }
}
