import { USERSLIST } from './SampleUsers';
import { UserDetails } from './userdetails';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  public userList: UserDetails[] = [];

  constructor() { }

  /**
   * Returns the User Details List
   */
  getUsers(): Observable<UserDetails[]> {
    return of(USERSLIST);
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
}
