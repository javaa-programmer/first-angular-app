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

  userDetails: UserDetails[];

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
    this.displayDetails = false;
    this.uDetails = <UserDetails> this.queryForm.value;
    this.errorMessage = "";

    if(this.uDetails.id) {
      this.umService.searchUserListById(this.uDetails.id)
        .subscribe(ud => this.userList = ud["data"],
        (error) => {console.error('error caught in component');
          this.errorMessage = "User not found for Id: " + this.uDetails.id;
          this.loading = false;
        },
        () =>  this.recordFound = true
      );
    
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
    this.umService.getUserDetails(id)
            .subscribe((ud) => this.selectedUser = ud["data"][0]);
    this.displayDetails = true;
  }

  /**
   * 
   */
  closeDetails() {
    this.displayDetails = false;
  }

}
