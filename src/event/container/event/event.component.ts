import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/event/services/event.service';
import { Event } from 'src/event/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public events: Event[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

}
