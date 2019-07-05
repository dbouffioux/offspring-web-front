import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/event/models/event.model';
import { Router } from '@angular/router';
import { EventService } from 'src/event/services/event.service';
import { AuthenticationService } from 'src/person/services/authentication.service';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent implements OnInit {

  public event: Event;
  public createEventForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private eventService: EventService,
    private authService: AuthenticationService
    ) {
    this.event = new Event();
    this.createEventForm = this.fb.group({
      name: this.fb.control(this.event.name, [Validators.required]),
      dateDebut: this.fb.control(this.event.dateDebut, [Validators.required]),
      dateFin: this.fb.control(this.event.dateFin, [Validators.required]),
      heureDebut: this.fb.control(this.event.heureDebut, [Validators.required]),
      heureFin: this.fb.control(this.event.heureFin, [Validators.required]),
    });
  }

  ngOnInit() {
  }

  hasNameError() {
    const control = this.createEventForm.get('name');
    return control.errors && control.errors.required;
  }

  hasDateDebutError() {
    const control = this.createEventForm.get('dateDebut');
    return control.errors && control.errors.required;
  }

  hasDateFinError() {
    const control = this.createEventForm.get('dateFin');
    return control.errors && control.errors.required;
  }

  hasHeureDebutError() {
    const control = this.createEventForm.get('heureDebut');
    return control.errors && control.errors.required;
  }

  hasHeureFinError() {
    const control = this.createEventForm.get('heureFin');
    return control.errors && control.errors.required;
  }

  onSubmit() {
    const newValues =  this.createEventForm.value;

    const newEvent = new Event();
    newEvent.name = newValues.name;
    newEvent.dateDebut = newValues.dateDebut;
    newEvent.dateFin = newValues.dateFin;
    newEvent.heureDebut = newValues.heureDebut + ':00';
    newEvent.heureFin = newValues.heureFin + ':00';
    newEvent.creatorId = this.authService.getLoggedInUser();

    this.event = newEvent;
    this.eventService.createEvent(this.event).subscribe();

    this.router.navigate(['/']);
  }
}
