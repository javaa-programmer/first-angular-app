import { ResponseEntities } from './../ResponseEntities';
import { UsermanagementService } from './../usermanagement.service';
import { UserDetails } from './../userdetails';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
  providers: []
})
export class UserregistrationComponent implements OnInit {

  constructor(public router: Router, private regForm: FormBuilder,
                private umService: UsermanagementService) { 
    this.confirmFlag = false;
  }

  registrationForm: FormGroup;
  private userDetails: UserDetails;
  public confirmFlag: Boolean = false;
  private resEntities: ResponseEntities = new ResponseEntities();
  
  ngOnInit(): void {
    console.log("Inside ngOnInit");
    this.confirmFlag = false;
    this.registrationForm = this.regForm.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: [],
      city: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required]
    })
  }

  saveUserDetails() {
    console.log("Form Data: " , this.registrationForm.value);

    if (this.registrationForm.invalid) {
      return;
  }
    this.resEntities.userDetails = <UserDetails> this.registrationForm.value;
    this.umService.saveUserDetails(this.resEntities).subscribe(
          (details: UserDetails) => console.log(details));
    this.router.navigate(['registration']);
    this.confirmFlag = true;
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
