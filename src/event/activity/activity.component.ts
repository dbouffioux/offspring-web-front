import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public activity: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getActivities().subscribe(activity => this.activity = activity);
  }

}
