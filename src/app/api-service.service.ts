import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Build } from './models/build-model';
import { Dclist } from './models/dclist-model';
import { BuildServer } from './models/build-server';
import { retry, catchError } from 'rxjs/operators';
import { Usage } from './models/usage-models';
import { OldestBuilds } from './models/oldestbuilds-models';
import { Passive } from './models/passive-model';
import { Active } from './models/active-model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // buildsUrl = 'http://5cd7a40a0cc5100014f1e116.mockapi.io/api/disk/';
  apiUrl = 'http://localhost:3004/'


  constructor( private http: HttpClient ) { }

  buildsApi(): Observable<Build> {
    return this.http.get<Build>(this.apiUrl + 'builds')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };
  gamersApi(): Observable<Build> {
    return this.http.get<Build>(this.apiUrl + 'gamers')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };
  dclistApi(): Observable<Dclist> {
    return this.http.get<Dclist>(this.apiUrl + 'dcList')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };
  buildserverApi(): Observable<BuildServer> {
    return this.http.get<BuildServer>(this.apiUrl + 'buildServer')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  usageApi(): Observable<Usage> {
    return this.http.get<Usage>(this.apiUrl + 'usage')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  oldestBuildsApi(): Observable<OldestBuilds>{
    return this.http.get<OldestBuilds>(this.apiUrl + 'oldestbuilds')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  activeApi(): Observable<Active>{
    return this.http.get<Active>(this.apiUrl + 'active')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };
  passiveApi(): Observable<Passive>{
    return this.http.get<Passive>(this.apiUrl + 'passive')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  };

}
