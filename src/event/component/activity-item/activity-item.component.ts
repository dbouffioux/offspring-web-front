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
  public registrationId: number;
  private id: string;

  public isParticipantValue: boolean;



  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getActivities();
      const id: string = params.id;

    });
    this.registration = new Registration();
  }


  private getActivities() {
    this.activityService.getActivities().subscribe(
      activities => {
        this.activity = activities.find(activity => activity.id.toString() === this.id);
        this.activityId = Number(this.id);
        this.canManage = this.authenticationService.isOwner(this.activity.creator.id);
        this.isParticipant();
      }
    );
  }

  public isParticipant() {
    const currentUserId = this.authenticationService.getLoggedInUser();
    this.isParticipantValue = false;
    this.activity.participants.map((participant) => {
      console.log();
      if (participant.id.toString() === currentUserId) {
        this.isParticipantValue = true;
      }
    });

  }

  public inscription() {
    this.registration.activityId = Number(this.activity.id);
    this.registration.personId = Number(this.authenticationService.getLoggedInUser());
    this.activityService.inscription(this.registration).subscribe(() => {location.reload()} );
    this.router.navigate(['/events/activity/' + this.activity.id]);
    this.getActivities();
  }

  public desinscription(){
    this.activityService.getInscriptionIdByPersonId(Number(this.authenticationService.getLoggedInUser())).subscribe(
      registrations => {
        const reg = registrations.find(registration => registration.activityId === this.activityId);
        this.registrationId = reg.id;
        this.activityService.desinscription(Number(this.registrationId)).subscribe();
        location.reload();
      }
    );
    this.getActivities();
  }

  public onEdit(event: Activity) {

  }

  public onUpdate(event: Activity) {

  }

  public onRemove() {
    this.activityService.delete(this.activity.id).subscribe();
    location.reload();
  }

  public onCreate(event: Activity) {

  }
}
