import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Event } from '../models/event.model';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class EventService {
  public params: HttpParams;
  constructor(private http: HttpClient) {
    this.params = new HttpParams();
  }

  public getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`${environment.baseUrl}event`)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }

  public deleteEvent(event: Event): Observable<Event[]> {
    this.params.set('id', event.id.toString());
    const options = { params: this.params };
    return this.http
      .delete<Event[]>(`${environment.baseUrl}event`, options)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }
}
