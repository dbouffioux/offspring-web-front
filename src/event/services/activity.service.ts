import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Activity } from '../models/activity.model';
import { Observable, throwError } from 'rxjs';


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
    console.log(`${environment.baseUrl}createActivity`, payload);
    return this.http
      .post<Activity>(`${environment.baseUrl}createActivity`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
