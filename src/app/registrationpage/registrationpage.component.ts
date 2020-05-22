import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {
  registrationFormValues:any=[];
  firstname:string='firstname';
  lastname:string='lastname';
  email:string='name@gmail.com';
  password:string='password';
  confirmpassword:string='confirm password';
  phonenumber ='phone number';
  location:string='location';
  address:string='address';
  clickMessage = '';
  dateofbirth:string;
  constructor()
  {
    this.registrationFormValues.firstname='';

  }
 onClickMe() {
    this.clickMessage = 'submit';
    console.log(this.clickMessage);
    console.log(this.registrationFormValues);
    this.registrationFormValues=[];
  }
 ngOnInit() {
  }
}

