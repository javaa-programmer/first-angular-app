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
  public userDetails: UserDetails;

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

  async saveUserDetails(resEntities: ResponseEntities) {
    return await this.httpClient.post<UserDetails>(
      this.myAppUrl + this.myApiUrl, JSON.stringify(resEntities), 
          this.httpOptions).toPromise();
  }
  /**
   * Returns the User Details List
   */
  async getUsers(): Promise<UserDetails[]> {
    try {
      this.userList = await this.httpClient.get<UserDetails[]>(
              this.myAppUrl + this.myApiUrl, this.httpOptions).toPromise();
      return this.userList['data'];
    } catch (error) {
      console.log("error");
    }
  }

  /**
   * Returns the user details of matching id.
   * @param id the user id
   */
  async getUserDetails(id: number) {
    try {
      this.userList = await this.httpClient.get<UserDetails[]>(
          this.myAppUrl + this.myApiUrl + id, this.httpOptions)
          .toPromise();
      this.userDetails = this.userList['data'][0];
      console.log("User Details: "+ this.userDetails);
      return this.userDetails;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 
   * @param id 
   */
  async searchUserListById(id: number) {
    try {
      this.userList = await this.httpClient.get<UserDetails[]>(
            this.myAppUrl + this.myApiUrl + id, this.httpOptions)
            .toPromise();
      return this.userList;
    } catch (error) {
      console.log(error);
    }
  }
}
