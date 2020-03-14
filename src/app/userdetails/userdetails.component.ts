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

  public selectedUser: UserDetails[] = [];
  public recordFound: boolean = false;
  public id: Number;

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

  searchUser() {
    this.selectedUser = [];
    this.recordFound = false;

    this.uDetails = <UserDetails> this.queryForm.value;

    for (let ud of this.userDetails) {
      if(ud.id == this.uDetails.id) {
        this.selectedUser.push(ud);
        this.recordFound = true;
      }
      console.log(this.uDetails.id);
      console.log(this.uDetails.lastname);
    }

    for (let ud of this.userDetails) {
      if((ud.firstname + " " + ud.lastname) == this.uDetails.lastname) {
        this.selectedUser.push(ud);
        this.recordFound = true;
      }
    }

    this.router.navigate(['userdetails']);
  }

  exitForm() {
    this.queryForm.reset();
    this.router.navigate(['']);
  }

  showDetails() {

    this.uDetails = <UserDetails> this.queryForm.value;

    if(this.uDetails.lastname == null) {
      for(let ud of this.userDetails) {
        if(ud.id = this.uDetails.id) {
          this.uDetails.firstname = ud.firstname;
          this.uDetails.lastname = ud.lastname;
          this.uDetails.address = ud.address;
          this.uDetails.city = ud.city;
          this.uDetails.country = ud.country;
          this.uDetails.pincode = ud.pincode;
        }
      }
    } else {
      for(let ud of this.userDetails) {
        if((ud.firstname + " " + ud.lastname) == this.uDetails.lastname) {
          this.uDetails.id = ud.id;
          this.uDetails.firstname = ud.firstname;
          this.uDetails.lastname = ud.lastname;
          this.uDetails.address = ud.address;
          this.uDetails.city = ud.city;
          this.uDetails.country = ud.country;
          this.uDetails.pincode = ud.pincode;
        }
      }
    }
    console.log(this.uDetails);

  }

}
