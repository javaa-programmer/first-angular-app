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
  public userDoesNotExist : boolean = false;
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
  async searchUser() {
    this.userList = [];
    this.recordFound = false;
    this.userDoesNotExist = false;
    this.displayDetails = false;
    this.uDetails = <UserDetails> this.queryForm.value;
    this.errorMessage = '';

    try {
      if(this.uDetails.id) {
        var ud = await this.umService.searchUserListById(this.uDetails.id);
        this.userList = ud['data'];
        this.recordFound = true;
      } 
    } catch (error) {
      this.recordFound = false;
      this.userDoesNotExist = true;
      if (error.error instanceof ErrorEvent) {
        // client-side error
        this.errorMessage = `${error.error.message}`;
      } else {
        // server-side error
        if (Number(`${error.status}`) == 0) {
          this.errorMessage = 'Could not connect to Server. Please check if Server is Running';
        } else {
          this.errorMessage = `${error.error.message}`;
        }
      }
    }
    this.displayDetails = false;
    this.router.navigate(['userdetails']);
  }

  /**
   * Exit the form
   */
  exitForm() {
    this.queryForm.reset();
    this.router.navigate(['']);
  }

  /**
   * Display the details of the user when the detail
   * icon click on any user in user list
   * @param id   the user id   
  */
  async showDetails(id: number) {
    var ud = await this.umService.getUserDetails(id);
    this.selectedUser = ud;
    this.displayDetails = true;
  }
  /**
   * 
   */
  closeDetails() {
    this.displayDetails = false;
  }
}