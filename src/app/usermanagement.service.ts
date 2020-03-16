import { environment } from './../environments/environment';
import { USERSLIST } from './SampleUsers';
import { UserDetails } from './userdetails';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/UserDetails/';

  }

  /**
   * Returns the User Details List
   */
  getUsers(): Observable<UserDetails[]> {

    console.log("Inside getUsers() in Service Class.");
    return this.http.get<UserDetails[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)); 
 //   return of(USERSLIST);
  }

  /**
   * Returns the user details of matching id.
   * @param id the user id
   */
  getUserDetails(id: number): Observable<UserDetails> {
    for( let ud of USERSLIST ) {
      if( ud.id == id) {
        return of(ud);
      }
    }
  }
  /**
   * 
   * @param id 
   */
  searchUserListById(id: number): Observable<UserDetails[]> {
    this.userList = [];
    for (let ud of USERSLIST) {
      if(ud.id == id) {
        this.userList.push(ud);
      }
    }
    return of(this.userList);  
  } 
  /**
   * 
   * @param id 
   */
  searchUserListByName(username: string): Observable<UserDetails[]> {
    this.userList = [];
    for (let ud of USERSLIST) {
      if((ud.firstname + " " + ud.lastname) == username) {
        this.userList.push(ud);
      }
    }
    return of(this.userList);  
  } 

  errorHandler(error) {
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
