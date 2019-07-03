import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient){ }
  public testLog(payload: Log): Observable<Log> {
    return this.http
      .post<Log>(`${environment.baseUrl}login`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
