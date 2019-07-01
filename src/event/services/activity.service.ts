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
}
