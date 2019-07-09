import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { AuthenticationService } from '../../../person/services/authentication.service';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity.model';
import { Event } from '../../models/event.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-activity-form',
  templateUrl: './update-activity-form.component.html',
  styleUrls: ['./update-activity-form.component.scss']
})
export class UpdateActivityFormComponent implements OnInit {

  public events: Event[];
  public activity: Activity;
  public updateActivityForm: FormGroup;
  public canManage: boolean;
  public id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private eventService: EventService,
              private fb: FormBuilder,
              private activityService: ActivityService) {

    this.activity = new Activity();
    this.updateActivityForm = this.fb.group({
      name: this.fb.control(this.activity.name, [Validators.required]),
      event: this.fb.control(this.activity.eventId, [Validators.required]),
      dateDebut: this.fb.control(this.activity.dateDebut, [Validators.required]),
      dateFin: this.fb.control(this.activity.dateFin, [Validators.required]),
      heureDebut: this.fb.control(this.activity.heureDebut, [Validators.required]),
      heureFin: this.fb.control(this.activity.heureFin, [Validators.required]),
    });
  }

  public onSubmit() {
    const val = this.updateActivityForm.value;
    this.activity.name = val.name;
    this.activity.eventId = val.event;
    this.activity.dateDebut = val.dateDebut;
    this.activity.dateFin = val.dateFin;
    this.activity.heureDebut = val.heureDebut + ':00';
    this.activity.heureFin = val.heureFin + ':00';
    this.activity.creatorId = this.authenticationService.getLoggedInUser();

    console.log(this.authenticationService.getLoggedInUser());

    const result = this.activityService.updateActivity(this.activity, this.id);
    result.subscribe();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    const now = new Date(Date.now());
    const val = this.updateActivityForm.value;
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.id = id;
      this.activityService.getActivities().subscribe(
        activities => {
          this.activity = activities.find(activity => activity.id.toString() === id);
          this.canManage = this.authenticationService.isOwner(Number(this.activity.creatorId));
        }
      );
    });
    console.log(this.activity.dateDebut);
  }

  hasNameError() {
    const control = this.updateActivityForm.get('name');
    return control.errors && control.errors.required;
  }

  hasDateDebutError() {
    const control = this.updateActivityForm.get('dateDebut');
    return control.errors && control.errors.required;
  }

  hasDateFinError() {
    const control = this.updateActivityForm.get('dateFin');
    return control.errors && control.errors.required;
  }

  hasHeureDebutError() {
    const control = this.updateActivityForm.get('heureDebut');
    return control.errors && control.errors.required;
  }

  hasHeureFinError() {
    const control = this.updateActivityForm.get('heureFin');
    return control.errors && control.errors.required;
  }

  hasEventError() {
    const control = this.updateActivityForm.get('event');
    return control.errors && control.errors.required;
  }

}
