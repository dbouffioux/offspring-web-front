import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';
import { publishDefaultGlobalUtils } from '@angular/core/src/render3/global_utils';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public activities: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    /* or (const activity of this.activities) {
      let date = new Date(activity.dateDebut);
      activity.dateDebut = date.toLocaleDateString('fr-FR');
      console.log(activity.dateDebut);
      console.log(date);
    } */
    this.activityService.getActivities().subscribe(activity => this.activities = activity);
  }
}
