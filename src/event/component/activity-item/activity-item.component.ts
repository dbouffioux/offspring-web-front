import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/event/models/activity.model';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/event/services/activity.service';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {

  public activity: any;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.activityService.getActivities().subscribe(
        activities => {
          this.activity = activities.find(activity => activity.id.toString() === id);
        }
      );
    });
  }

  public onEdit(event: Activity) {
  }

  public onUpdate(event: Activity) {

  }

  public onRemove(event: Activity) {

  }

  public onCreate(event: Activity) {

  }
}
