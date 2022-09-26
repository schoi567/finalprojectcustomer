import { customers } from 'src/app/login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from '../services/userauthentication.service';
import { LoginComponent } from '../login/login.component';
import { allcustomers } from '../login/login.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable({providedIn: 'root'})
export class SignupComponent implements OnInit {
  AllCustomers: allcustomers[] = [];
  customer: customers = {};

  constructor(private router: Router, private UserauthenticationService: UserauthenticationService,
  private LoginComponent: LoginComponent) { }

  ngOnInit(): void {
    this.UserauthenticationService.retrieveallcustomers().subscribe(
    (Customers) =>  this.AllCustomers= Customers);




    sessionStorage.clear();
    localStorage.clear();


  }


  signupsuccess() {
    const usrname = localStorage.getItem("username");

for (var i=0; i < this.AllCustomers.length; i++) {
  if (this.AllCustomers[i].phonenumber == this.customer.phonenumber)
          { alert("please use different phonenumber: Already in use.");return;}
  if (this.AllCustomers[i].email == this.customer.email)
          { alert("please use different email: Already in use.");return;}
  if (this.AllCustomers[i].savingsaccountnumber == this.customer.savingsaccountnumber)
          { alert("please use different Savings Account Number: Already in use.");return;}
  if (this.AllCustomers[i].primaryaccountnumber == this.customer.primaryaccountnumber)
          { alert("please use different Primary Account Number: Already in use.");return;}
  }


if (this.customer.phonenumber.toString().length  !== 10)
{ alert("Phone number has to be in 10 digits") }
if (this.customer.savingsaccountnumber.toString().length  !== 8)
{ alert("Savings account number has to be in 8 digits") }
if (this.customer.primaryaccountnumber.toString().length  !== 8)
{ alert("Primary account number has to be in 8 digits") }


else {
this.UserauthenticationService.createaccount(this.customer).subscribe(
  response => { (data) => console.log(data)
    alert("Sign Up Successful");},
    error => {
      alert("Sign Up failed")
   })


  }


  }
}
