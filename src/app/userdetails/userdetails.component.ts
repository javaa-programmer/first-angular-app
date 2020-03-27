import { UsermanagementService } from './../usermanagement.service';
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
  public errorMessage: string;
  public loading: boolean = true;
  userDetails: UserDetails;

  ngOnInit(): void {
    this.queryForm = this.regForm.group({
      id: []
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
    this.uDetails = <UserDetails> this.queryForm.value;
    if(this.uDetails.id) {
      this.umService.searchUserListById(
              this.uDetails.id).then(ud => this.userList = ud['data'])
      this.recordFound = true;
    } 
    this.router.navigate(['userdetails']);
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
    this.umService.getUserDetails(id).then(
          ud => this.selectedUser = ud);
    console.log("User Details : " + this.selectedUser);
    this.displayDetails = true;
  }

  /**
   * 
   */
  closeDetails() {
    this.displayDetails = false;
  }
}