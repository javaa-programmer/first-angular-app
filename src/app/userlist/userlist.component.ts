import { UsermanagementService } from './../usermanagement.service';
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
    this.umService.getUsers().then(
            ud => this.userDetails = ud
    );
  }
  /**
   * Displays the details of the user having id as user id
   * @param id the user id
   */
  showUserDetails(id: number): void {
    this.umService.getUserDetails(id).then(
            ud => this.selectedUser = ud);
    console.log("selected User: " + this.selectedUser);
    this.displayDetails = true;
  }
  /**
   * Close the details block
   */
  closeDetails() {
    this.displayDetails = false;
  }
}
