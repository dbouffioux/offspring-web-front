import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Event } from 'src/event/models/event.model';
import { EventService } from 'src/event/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventItemComponent implements OnInit {

  @Input() event: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }


  public onEdit(event: Event) {
  }

  public onUpdate(event: Event) {

  }

  public onRemove(event: Event) {
    this.eventService.deleteEvent(event);
    this.router.navigate(['/']);
  }

  public onCreate(event: Event) {

  }
}
