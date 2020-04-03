import { ResponseEntities } from './../ResponseEntities';
import { UsermanagementService } from './../usermanagement.service';
import { UserDetails } from './../userdetails';
import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
  providers: [DatePipe]
})
export class UserregistrationComponent implements OnInit {

  @Input() progress;
  constructor(public router: Router, private regForm: FormBuilder,
                private umService: UsermanagementService, private datePipe: DatePipe) { 
    this.confirmFlag = false;
  }

  registrationForm: FormGroup;
  private userDetails: UserDetails;
  public confirmFlag: Boolean = false;
  private resEntities: ResponseEntities = new ResponseEntities();


  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  formattedDate: any;

  ngOnInit(): void {
    this.confirmFlag = false;
    this.registrationForm = this.regForm.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: [],
      dateofbirth: [],
      city: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      profilepic: [],
      image: [null]
    })
  }

  submitUserDetails() {
    if (this.registrationForm.invalid) {
      return;
    }
    var formData: any = new FormData();
    formData.append("firstname", this.registrationForm.get('firstname').value);
    formData.append("lastname", this.registrationForm.get('lastname').value);
    formData.append("address", this.registrationForm.get('address').value);
    formData.append("city", this.registrationForm.get('city').value);
    formData.append("country", this.registrationForm.get('country').value);
    formData.append("pincode", this.registrationForm.get('pincode').value);
    formData.append("file", this.registrationForm.get('image').value);
    this.formattedDate = this.datePipe.transform(this.registrationForm.get('dateofbirth').value, 'yyyyMMdd');
    formData.append("dateofbirth", this.formattedDate);
    console.log("Date of Birth: "+this.formattedDate);
    this.umService.submitUserDetails(formData).then(
      (details: UserDetails) => console.log(details));
    this.router.navigate(['registration']);
    this.confirmFlag = true;
  }

  resetForm() {
    this.registrationForm.reset();
    this.confirmFlag = false;
    this.fileData = null;
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

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }

  uploadFile(event) {
    this.fileData = (event.target as HTMLInputElement).files[0];
    this.registrationForm.patchValue({
      image: this.fileData
    });
    this.registrationForm.get('image').updateValueAndValidity()
    this.preview();
  }
}
