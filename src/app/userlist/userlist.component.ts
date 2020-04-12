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
  public userListFound : boolean = false;
  public errorMessage : string = '';

  constructor(private umService: UsermanagementService) { }

  ngOnInit(): void {
    this.getUsers();
    this.displayDetails = false;
  }
  /**
   * Get the user list using UserManagementService
   */
  async getUsers() {
    try {
      var userList = await this.umService.getUsers();
      this.userDetails = userList['data'];
      this.userListFound = true;
    } catch (error) {
      this.userListFound = false;
      if (error.error instanceof ErrorEvent) {
        // client-side error
        this.errorMessage = `${error.error.message}`;
      } else {
        // server-side error
        if (Number(`${error.status}`) == 0) {
          console.log("Could not connect to Server. Please check if Server is Running");
          this.errorMessage = 'Could not connect to Server. Please check if Server is Running';
        } else {
          console.log("Other Error: ", `${error.error.message}`);
          this.errorMessage = `${error.error.message}`;
        }
      }      
    }
  }
  /**
   * Displays the details of the user having id as user id
   * @param id the user id
   */
  async showUserDetails(id: number) {
    var udetail = await this.umService.getUserDetails(id);
    this.selectedUser = udetail;
    this.displayDetails = true;
  }
  /**
   * Close the details block
   */
  closeDetails() {
    this.displayDetails = false;
  }
}
