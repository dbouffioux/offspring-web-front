import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/event/services/event.service';
import { Event } from 'src/event/models/event.model';
import { AuthenticationService } from 'src/person/services/authentication.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public events: Event[];
  public showCreateButton: boolean;
  constructor(
    private eventService: EventService,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => this.events = events);
    this.showCreateButton = this.authenticationService.isLoggedIn();
  }

}
