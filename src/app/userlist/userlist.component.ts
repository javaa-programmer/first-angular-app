import { UserDetails } from './../userdetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public selectedUser: UserDetails;

  public displayDetails: boolean = false;

  userDetails: UserDetails[] = [
    new UserDetails(1,"Niamul","Sanjavi","Kamalgazi, Garia","Kolkata","India","Niamul",null,700103),
    new UserDetails(2,"Aniruddha","Garai","Belgharia","Kolkata","India","Niamul",null,700106),
    new UserDetails(3,"Saurav","Adhikari","Baishnabghata, Garia","Kolkata","India","Niamul",null,700072)
  ] 

  constructor() { }

  ngOnInit(): void {
  }

  showUserDetails(id: number) {
    console.log("Inside Show User Details");
    console.log("Id : ", id);

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
