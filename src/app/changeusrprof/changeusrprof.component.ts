import { Component, OnInit } from '@angular/core';
import { customers } from 'src/app/login/login.component';
import { Router } from '@angular/router';
import { UserauthenticationService } from '../services/userauthentication.service';
import { LoginComponent } from '../login/login.component';
import { allcustomers } from '../login/login.component';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-changeusrprof',
  templateUrl: './changeusrprof.component.html',
  styleUrls: ['./changeusrprof.component.css']
})
export class ChangeusrprofComponent implements OnInit {
  AllCustomers: allcustomers[] = [];
  error?: any;
  customer: customers = {};

  constructor(private Router: Router, private UserauthenticationService: UserauthenticationService,
    private LoginComponent: LoginComponent) { }

  ngOnInit(): void {
    const usrname = localStorage.getItem("username");

    this.UserauthenticationService.retrievecustomer(usrname).subscribe(
    (customer) =>  this.customer= customer);


    this.UserauthenticationService.retrieveallcustomers().subscribe(
      (Customers) =>  this.AllCustomers= Customers);



  }



Changeprof() {

    const usrname = localStorage.getItem("username");

 this.UserauthenticationService.updatecustomers(usrname, this.customer).subscribe(
  response => {(customer) =>  this.customer = customer
    alert("Update information success")},
  error => {alert("Update information failed")})



for (var i=0; i < this.AllCustomers.length; i++) {
if (this.AllCustomers[i].username == this.customer.username)

  if (this.customer.phonenumber.toString().length  !== 10)
{
  alert("phone number digit has to be in 10 digits")
  return;


}

    if (this.AllCustomers[i].phonenumber == this.customer.phonenumber)
    { if (this.AllCustomers[i].id == this.customer.id)
      {continue;}
      else
      alert("please use different phonenumber: Already in use.")
      return;
    }

    if (this.AllCustomers[i].email == this.customer.email)
    {

      if (this.AllCustomers[i].id == this.customer.id)
      {continue;}
      else

        alert("please use different email: Already in use.")
        return;

    }




    this.Router.navigate([""]);

}



}





}



