import { HeaderObject } from './../HeaderObject';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-user-list',
  templateUrl: './dynamic-user-list.component.html',
  styleUrls: ['./dynamic-user-list.component.css']
})
export class DynamicUserListComponent implements OnInit {
  
  headerObject: HeaderObject = new HeaderObject();
  values = [
    {
      "user_id" : "1",
      "name" : "Rahul",
      "age" : "21",
      "gender" : "Male",
      "country" : "India",
      "pin_code" : "700034"
    },
    {
      "user_id" : "2",
      "name" : "Ajay",
      "age" : "25",
      "gender" : "Male",
      "country" : "India",
      "pin_code" : "700049"
    },
    {
      "user_id" : "3",
      "name" : "Sonia",
      "age" : "31",
      "gender" : "Female",
      "country" : "India",
      "pin_code" : "700076"
    },
    {
      "user_id" : "4",
      "name" : "Kuheli",
      "age" : "29",
      "gender" : "Female",
      "country" : "India",
      "pin_code" : "700031"
    }
  ];  

  constructor() { }

  ngOnInit(): void {
    this.headerObject.headers = ["user_id", "name", "age", "gender", "country", "pin_code"];
    this.headerObject.headers_alias = ["User Id", "User Name", "Age", "Gender", "Country", "Pincode"];
  }

  updateData(d) {
    d = "Tanisha Sanjavi"
  }
}
