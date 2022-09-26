import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';



export interface depositwithdrawmoney {
  id?: number,
  amount?: BigInt,
  approved?: any,
  date?: any,
  account?: any,
  username?: any,

}

 export class depositwithdrawmoney1  {constructor(
   public id?: number,
   public amount?: BigInt,
   public approved?: any,
   public date?: any,
   public account?: any,
   public username?: any
 ) {}
 }

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-depositwithdraw',
  templateUrl: './depositwithdraw.component.html',
  styleUrls: ['./depositwithdraw.component.css']
})



export class DepositwithdrawComponent implements OnInit {
  constructor(private router: Router, private UserauthenticationService: UserauthenticationService) { }

  depositamount?: any;
  withdrawamount?: any;
  accountypedeposit?: any
  accountypewithdraw?: any
  depositwithdrawmoney1: depositwithdrawmoney1[] = [];
  depositwithdrawmoney: depositwithdrawmoney = {      };

  ngOnInit(): void {
  }

  withdraw() {
    const username = localStorage.getItem('username');
    this.depositwithdrawmoney.username =  username
    let withdrawamount1 = this.withdrawamount
    withdrawamount1 = withdrawamount1*(-1)
    this.depositwithdrawmoney.account = this.accountypewithdraw

    this.depositwithdrawmoney.amount = withdrawamount1
    alert("You balace will be " + this.depositwithdrawmoney.amount)

    console.log(this.depositwithdrawmoney)

    this.UserauthenticationService.depositwithdraw(username, this.depositwithdrawmoney).subscribe(
      response => {
      (depositwithdrawmoney) =>  this.depositwithdrawmoney = depositwithdrawmoney
      alert("Request success")
     },
      error => {
        alert("Request failed, Please try again")
     })







  }


  deposit() {
    const username = localStorage.getItem('username');
    this.depositwithdrawmoney.username =  username
    this.depositwithdrawmoney.amount = this.depositamount
    this.depositwithdrawmoney.account = this.accountypedeposit
    alert("You balace will be " + this.depositwithdrawmoney.amount)

    this.UserauthenticationService.depositwithdraw(username, this.depositwithdrawmoney).subscribe(
      response => {
      (depositwithdrawmoney) =>  this.depositwithdrawmoney = depositwithdrawmoney
      alert("Request success")
     },
      error => {
        alert("Request failed, Please try again")
     })



  }


}
