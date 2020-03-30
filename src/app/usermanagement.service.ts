import { ResponseEntities } from './ResponseEntities';
import { environment } from './../environments/environment';
import { UserDetails } from './userdetails';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http'
import { retry, catchError, map } from 'rxjs/operators';


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
      'Authorization': 'ums-token',
      //'Content-Type': 'multipart/form-data; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private httpClient: HttpClient) { 
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/UserDetails/';
  }

/*  async saveUserDetails(resEntities: ResponseEntities) {
    return await this.httpClient.post<UserDetails>(
      this.myAppUrl + this.myApiUrl, JSON.stringify(resEntities), 
          this.httpOptions).toPromise();
  }
*/

  /**
   * 
   * @param formData 
   */
  async submitUserDetails(formData: FormData) {
    return await this.httpClient.post<UserDetails>(
      "https://localhost:5001/api/uploadImage", formData, 
          this.httpOptions).toPromise();
  }

  /**
   * Returns the User Details List
   */
  async getUsers(): Promise<UserDetails[]> {
    try {
      this.userList = await this.httpClient.get<UserDetails[]>(
              this.myAppUrl + this.myApiUrl, this.httpOptions).toPromise();
      
      return this.userList;
    } catch (error) {
      console.log("error status: ", error.staus);
      console.log("error message: ", error.message);
      console.log("complete error: ", error);
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
      console.log("User Details: "+ this.userDetails.profilepic);
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
