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
  constructor(public router: Router, private regForm: FormBuilder) { 
  
  }

  queryForm: FormGroup;

  public selectedUser: UserDetails ;
  public recordFound: boolean = false;
  public displayDetails: boolean = false;
  public userList: UserDetails[] = [];

  userDetails: UserDetails[] = [
    new UserDetails(1,"Niamul","Sanjavi","Kamalgazi, Garia","Kolkata","India","Niamul",null,700103),
    new UserDetails(2,"Aniruddha","Garai","Belgharia","Kolkata","India","Niamul",null,700106),
    new UserDetails(3,"Saurav","Adhikari","Baishnabghata, Garia","Kolkata","India","Niamul",null,700072)
  ] 

  ngOnInit(): void {
    console.log("Inside ngOnInit");
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

    this.uDetails = <UserDetails> this.queryForm.value;

    console.log("id : ", this.uDetails.id);
    console.log("name : ", this.uDetails.lastname);

    if(this.uDetails.id) {
      for (let ud of this.userDetails) {
        console.log("id 1: ", this.uDetails.id);
        if(ud.id == this.uDetails.id) {
          this.userList.push(ud);
          this.recordFound = true;
        }
      }  
    } else {
      for (let ud of this.userDetails) {
        console.log("Name : "+ this.uDetails.lastname);
        console.log((ud.firstname + " " + ud.lastname) == this.uDetails.lastname);
        if((ud.firstname + " " + ud.lastname) == this.uDetails.lastname) {
          this.userList.push(ud);
          this.recordFound = true;
        }
      }
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
  showDetails(id: number) {

    console.log("selected user id : ", id);
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
