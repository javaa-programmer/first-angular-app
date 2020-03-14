export class UserDetails {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    country: string;
    createdBy: string;
    creationDate: Date;
    pincode: number;

    constructor(id: number, firstname: string, lastname: string, address: string,
        city: string, country: string, createdBy: string, creationDate: Date, pincode: number) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.address = address;
            this.city = city;
            this.country = country;
            this.createdBy = createdBy;
            this.creationDate = creationDate;
            this.pincode = pincode;
    }
}