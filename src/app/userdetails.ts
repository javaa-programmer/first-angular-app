export class UserDetails {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    dateofbirth: Date;
    city: string;
    country: string;
    createdBy: string;
    creationDate: Date;
    pincode: number;
    profilepic: string

    constructor(id: number, firstname: string, lastname: string, address: string,
                dateofbirth: Date, city: string, country: string, createdBy: string, 
                creationDate: Date, pincode: number, profilepic: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.dateofbirth = dateofbirth;
        this.city = city;
        this.country = country;
        this.createdBy = createdBy;
        this.creationDate = creationDate;
        this.pincode = pincode;
        this.profilepic = profilepic;
    }
}