import { transfer } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';
import { alltransfers } from '../header/header.component';
import { customers } from '../login/login.component';
import { allcustomers } from '../login/login.component';
import { LoginComponent } from '../login/login.component';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-savingsaccounttransfer',
  templateUrl: './savingsaccounttransfer.component.html',
  styleUrls: ['./savingsaccounttransfer.component.css']
})
export class SavingsaccounttransferComponent implements OnInit {
  receiverusename?:  any;
  transferamount?: any;
  accountype?: any;
  accountnumber?: any;
  transfer: transfer = {}
  alltransfers: alltransfers[] = [];
  Customers: customers = {      };
  AllCustomers: allcustomers[] = [];
  errormessage?: any;

  constructor(public Router:Router, public UserauthenticationService:UserauthenticationService,

    ) { }

  ngOnInit(): void {this.UserauthenticationService.retrieveallcustomers().subscribe(
    (Customers) =>  this.AllCustomers= Customers);
  }

  transfersavings() {
    const username = localStorage.getItem("username");
    this.transfer.fromaccounttype = "savingsaccount";
    this.transfer.fromusername = username;
    this.transfer.amount = this.transferamount;
    this.transfer.receiverusename = this.receiverusename;
    this.transfer.toaccounttype = this.accountype;
    this.transfer.transfer = "pending";
    this.transfer.date = null;
    this.UserauthenticationService.retrieveallcustomers().subscribe(
      (Customers) =>  this.AllCustomers= Customers);

      if (this.receiverusename == username && this.accountype == "savingsaccountnumber")
      { alert("You cannot transfer money to your own same account");
    return; }


    for (let i = 0; i < this.AllCustomers.length; i++) {
      if(this.AllCustomers[i].username == this.transfer.receiverusename)
      {
      this.UserauthenticationService.transfer(this.transfer).subscribe(
        response => {
        (transfer) =>  this.transfer = transfer
        alert("Transfer request succes")
        this.Router.navigate(['uprofile',username]);

       },
        error => {
          alert("Transfer request failed, please type different id");
          return;
       });   return;
       }
       else {this.errormessage = "Transfer request failed, please type different id "}


    }


    }

}
