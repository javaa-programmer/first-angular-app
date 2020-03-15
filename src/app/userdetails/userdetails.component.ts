import { UsermanagementService } from './../usermanagement.service';
import { USERSLIST } from './../SampleUsers';
import { UserDetails } from './../userdetails';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public uDetails: UserDetails;
  constructor(public router: Router, private regForm: FormBuilder, private umService: UsermanagementService) { 
  
  }

  queryForm: FormGroup;

  public selectedUser: UserDetails ;
  public recordFound: boolean = false;
  public displayDetails: boolean = false;
  public userList: UserDetails[] = [];

  userDetails: UserDetails[];

  ngOnInit(): void {
    this.getUsers();
    this.queryForm = this.regForm.group({
      id: [],
      lastname: []
    })
  }

  /**
   * Search an user based on provided User Id or 
   * User Name. Display the list of users with 
   * matching search criteria.
   */
  searchUser() {
    this.userList = [];
    this.recordFound = false;
    this.displayDetails = false;
    this.uDetails = <UserDetails> this.queryForm.value;

    if(this.uDetails.id) {
      this.umService.searchUserListById(this.uDetails.id)
        .subscribe(ud => this.userList = ud);
      this.recordFound = true;
    } else {
      this.umService.searchUserListByName(this.uDetails.lastname)
        .subscribe(ud => this.userList = ud);
      this.recordFound = true;
    }
    this.router.navigate(['userdetails']);
  }

  /**
   * Get the user list using UserManagementService
   */
  getUsers() : void {
    this.umService.getUsers()
        .subscribe(ud => this.userDetails = ud);
  }

  exitForm() {
    this.queryForm.reset();
    this.router.navigate(['']);
  }

  /**
   * Display the details of the user when the detail
   * icon click on any user in user list
   * @param id   the user id   
  */
  showDetails(id: number): void {
    this.umService.getUserDetails(id)
            .subscribe(ud => this.selectedUser = ud);
    this.displayDetails = true;
  }

  /**
   * 
   */
  closeDetails() {
    this.displayDetails = false;
  }

}
