import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/event/models/activity.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/event/services/activity.service';
import { AuthenticationService } from 'src/person/services/authentication.service';
import { Registration } from '../../models/registration';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  public activity: any;
  public canManage: boolean;
  public deleteResult = false;
  public registration: Registration;
  public activityId: number;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.activityService.getActivities().subscribe(
        activities => {
          this.activity = activities.find(activity => activity.id.toString() === id);
          this.activityId = Number(id);
          this.canManage = this.authenticationService.isOwner(this.activity.creator.id);
        }
      );
    });
    this.registration = new Registration();
  }

  public inscription() {
    this.registration.activityId = Number(this.activity.id);
    this.registration.personId = Number(this.authenticationService.getLoggedInUser());
    this.activityService.inscription(this.registration).subscribe();
    this.router.navigate(['/events/activity/' + this.activity.id]);
  }

  public desinscription(){
    this.registration.activityId = Number(this.activity.id);
    this.registration.personId = Number(this.authenticationService.getLoggedInUser());
    this.activityService.inscription(this.registration).subscribe();
  }

  public onEdit(event: Activity) {

  }

  public onUpdate(event: Activity) {

  }

  public onRemove() {

    this.activityService.delete(this.activity.id).subscribe();
    this.router.navigate(['/']);
  }

  public onCreate(event: Activity) {

  }
}
