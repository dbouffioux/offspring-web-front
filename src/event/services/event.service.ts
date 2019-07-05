import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Event } from '../models/event.model';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class EventService {
  constructor(private http: HttpClient) {
  }

  public getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`${environment.baseUrl}event`)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }

  public deleteEvent(event: Event): Observable<Event[]> {
    return this.http
      .delete<Event[]>(`${environment.baseUrl}event/${event.id}`)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }

  public createEvent(payload: Event): Observable<Event[]> {
    return this.http
      .post<Event[]>(`${environment.baseUrl}event`, payload)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }
}
