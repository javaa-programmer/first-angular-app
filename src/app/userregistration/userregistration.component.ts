import { UserDetails } from './../userdetails';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
  providers: []
})
export class UserregistrationComponent implements OnInit {

  constructor(public router: Router, private regForm: FormBuilder) { 
    this.confirmFlag = false;
  }

  registrationForm: FormGroup;
  private userDetails: UserDetails;
  public confirmFlag: Boolean = false;

  ngOnInit(): void {
    console.log("Inside ngOnInit");
    this.confirmFlag = false;
    this.registrationForm = this.regForm.group({
      firstname: [],
      lastname: [],
      address: [],
      city: [],
      country: [],
      pincode: []
    })
  }

  saveUserDetails() {
    console.log("Form Data: " , this.registrationForm.value);
    this.userDetails = <UserDetails> this.registrationForm.value;
    this.confirmFlag = true;
    this.router.navigate(['registration']);
  }

  resetForm() {
    this.registrationForm.reset();
    this.confirmFlag = false;
    this.router.navigate(['registration']);
  }

  exitForm() {
    this.registrationForm.reset();
    this.confirmFlag = false;
    this.router.navigate(['']);
  }

  addUser() {
    this.registrationForm.reset();
    this.confirmFlag = false;
    this.router.navigate(['registration']);
  }
}
