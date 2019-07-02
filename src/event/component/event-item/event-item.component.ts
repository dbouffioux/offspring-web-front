import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Event } from 'src/event/models/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventItemComponent implements OnInit {

  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }


  public onEdit(event: Event) {
  }

  public onUpdate(event: Event) {

  }

  public onRemove(event: Event) {

  }

  public onCreate(event: Event) {

  }
}
