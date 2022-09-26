import { depositwithdrawmoney1 } from './../depositwithdraw/depositwithdraw.component';
import { Component, OnInit } from '@angular/core';
import { DepositwithdrawComponent } from '../depositwithdraw/depositwithdraw.component';
import { depositwithdrawmoney } from '../depositwithdraw/depositwithdraw.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';
import { transfer } from '../header/header.component';
import { alltransfers } from '../header/header.component';


@Component({
  selector: 'app-checkingaccountdetail',
  templateUrl: './checkingaccountdetail.component.html',
  styleUrls: ['./checkingaccountdetail.component.css']
})
export class CheckingaccountdetailComponent implements OnInit {
  depositwithdrawmoney1: depositwithdrawmoney1[] = [];
  depositwithdrawmoney: depositwithdrawmoney = {      };
  transfer: transfer = {}
  alltransfers: alltransfers[] = [];
  constructor(private Router: Router, private UserauthenticationService: UserauthenticationService) { }


  ngOnInit(): void {const username = localStorage.getItem('username');

  this.UserauthenticationService.retrievedepositwithdraw(username).subscribe(
    (depositwithdrawmoney1) =>  this.depositwithdrawmoney1 = depositwithdrawmoney1);


    this.UserauthenticationService.receivetransfer(username).subscribe(
      (alltransfers) =>  this.alltransfers = alltransfers);
  }

}
