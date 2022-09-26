import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accounts } from 'src/app/login/login.component';
import { UserauthenticationService } from '../services/userauthentication.service';
import { singleaccounts } from 'src/app/login/login.component';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
 AllAccounts: accounts[] = [];
 singleaccounts: singleaccounts = {};

 customerid?: number;
savingsaccount?: any;

  constructor(private router: Router,
    private UserauthenticationService: UserauthenticationService,
    ) { }



  ngOnInit(): void {

    const id = Number(localStorage.getItem('customersid'))




    this.UserauthenticationService.retrieveoneaccount(id).subscribe(
        (accounts) =>  this.singleaccounts = accounts);




  const x = localStorage.getItem('username');
  console.log(x);








}







}


