import { UsermanagementService } from './../usermanagement.service';
import { USERSLIST } from './../SampleUsers';
import { UserDetails } from './../userdetails';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public selectedUser: UserDetails;

  public displayDetails: boolean = false;

  userDetails: UserDetails[];

  constructor(private umService: UsermanagementService) { }

  ngOnInit(): void {
    this.getUsers();
    this.displayDetails = false;
  }

  /**
   * Get the user list using UserManagementService
   */
  getUsers(): void {
    this.umService.getUsers()
        .subscribe(ud => this.userDetails = ud);
  }

  showUserDetails(id: number) {
    for( let ud of this.userDetails ) {
      if( ud.id == id) {
        this.selectedUser = ud;
      }
    }

    this.displayDetails = true;
  }

  closeDetails() {
    this.displayDetails = false;
  }
}
