import { HeaderdesignService } from './../services/headerdesign.service';
import { UserauthenticationService } from './../services/userauthentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allcustomers } from './../login/login.component';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';



export interface transfer {
  id?: any;
  fromusername?: any;
  fromaccounttype?: any;
  date?: any;
  toaccounttype?: any;
  receiverusename?: any;
  amount?: any
  transfer?: any

 }

export class alltransfers  {constructor(
 public id: any,
 public fromusername: any,
 public fromaccounttype: any,
 public date: any,
 public toaccounttype: any,
 public receiverusename: any,
 public amount: any,
 public transfer: any
) {}
}



@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Router:Router,
    public UserauthenticationService:UserauthenticationService,
    public HeaderdesignService:HeaderdesignService )   { }

  ngOnInit(): void {

}


  changeprofile() {
    const username = localStorage.getItem('username');
    this.Router.navigate(["changeusrprof",username]);

  }

  HomePage() {
    this.Router.navigate([""]);

  }


  Logout() {
  sessionStorage.clear();
  localStorage.clear();

    this.Router.navigate([""]);
  }

  BD() {
    const username = localStorage.getItem('username');
    this.Router.navigate(['requestcheck',username]);

  }

  primaryaccount() {
    const username = localStorage.getItem('username');
    this.Router.navigate(['primaryhistory',username]);

  }

  primaryaccounttransfer() {    const username = localStorage.getItem('username');
  this.Router.navigate(['primaryaccounttransfer',username]);

  }
  savingsaccounttransfer()  {    const username = localStorage.getItem('username');
  this.Router.navigate(['savingsaccounttransfer',username]);

  }





  }
