import { ResponseEntities } from './ResponseEntities';
import { environment } from './../environments/environment';
import { UserDetails } from './userdetails';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  public userList: UserDetails[] = [];

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders( {
      'Authorization': 'usermanagementsystem',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private httpClient: HttpClient) { 
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/UserDetails/';

  }

  saveUserDetails(resEntities: ResponseEntities): Observable<UserDetails> {
    return this.httpClient.post<UserDetails>(this.myAppUrl + this.myApiUrl, JSON.stringify(resEntities), 
          this.httpOptions)
          .pipe(catchError(this.errorHandler));
  }
  /**
   * Returns the User Details List
   */
  getUsers(): Observable<UserDetails[]> {
    return this.httpClient.get<UserDetails[]>(this.myAppUrl + this.myApiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)); 
    //return of(USERSLIST);
  }

  /**
   * Returns the user details of matching id.
   * @param id the user id
   */
  getUserDetails(id: number): Observable<UserDetails> {
    const  params = new  HttpParams().set('id', id.toString());
    return this.httpClient.get<UserDetails>(this.myAppUrl + this.myApiUrl + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler));
        
/*        for( let ud of USERSLIST ) {
      if( ud.id == id) {
        return of(ud);
      }
    } */
  }
  /**
   * 
   * @param id 
   */
  searchUserListById(id: number): Observable<UserDetails[]> {
    const  params = new  HttpParams().set('id', id.toString());
    return this.httpClient.get<UserDetails[]>(this.myAppUrl + this.myApiUrl + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler));
  } 

  errorHandler(error) {
    console.log("Error : "+ error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
