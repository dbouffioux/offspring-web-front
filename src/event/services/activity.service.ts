import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Activity } from '../models/activity.model';
import { Observable, throwError } from 'rxjs';
import { Registration } from '../models/registration';


@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {}

  public getActivities(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(`${environment.baseUrl}activity`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  public delete(id: string): Observable<Activity> {
    return this.http
      .delete<Activity>(`${environment.baseUrl}activity/${id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  public postActivity(payload: Activity): Observable<Activity> {
    console.log(payload);
    return this.http
      .post<Activity>(`${environment.baseUrl}createActivity`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public updateActivity(payload: Activity, id: string): Observable<Activity> {
    console.log(payload);
    return this.http
    .put<Activity>(`${environment.baseUrl}update-activity/${id}`, payload)
    .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public inscription(payload: Registration) {

    return this.http
      .post<Registration>(`${environment.baseUrl}create-registration`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public desinscription(id: number) {
    console.log(`${environment.baseUrl}registration/${id}`);
    return this.http
      .delete<Registration>(`${environment.baseUrl}registration/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

   public getInscriptionIdByPersonId(id: number) {
    return this.http
    .get<Registration[]>(`${environment.baseUrl}registration/${id}`)
    .pipe(catchError((error: any) => throwError(error.json())));
   }
}
