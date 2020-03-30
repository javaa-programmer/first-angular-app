import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../usermanagement.service';
import { UserDetails } from '../userdetails';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {

 //declaration 
  headers = ["ID", "Name", "Age", "Gender", "Country", "Pincode"];
  
  values = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India",
      "Pincode" : "700034"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India",
      "Pincode" : "700049"
    },
    {
      "ID" : "3",
      "Name" : "Sonia",
      "Age" : "31",
      "Gender" : "Female",
      "Country" : "India",
      "Pincode" : "700076"
    }
  ];
  
  userDetails: UserDetails[];

  constructor(private umService: UsermanagementService) {}
  
  ngOnInit() {
    this.getUsers();
    console.log(this.userDetails);
    for (let obj of this.userDetails) {
      for (let key in obj) {
        console.log("      key:", key, "value:", obj[key]);
    }
  } 
    
    //all data in mock-data.ts
  }

  /**
   * Get the user list using UserManagementService
   */
  getUsers(): void {
    this.umService.getUsers().then(
            ud => this.userDetails = ud
    );
  }

  log(): void {
    console.log("Event Clicked");
  }

}
