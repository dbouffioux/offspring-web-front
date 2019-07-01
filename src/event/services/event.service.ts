import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Event } from '../models/event.model';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  public getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`${environment.baseUrl}event`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
