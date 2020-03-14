import { USERSLIST } from './SampleUsers';
import { UserDetails } from './userdetails';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor() { }

  /**
   * Returns the User Details List
   */
  getUsers(): Observable<UserDetails[]> {
    return of(USERSLIST);
  }
}
