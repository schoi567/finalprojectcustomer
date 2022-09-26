import { checkbookreq } from './../checkrequest/checkrequest.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';





@Component({
  selector: 'app-checkbook',
  templateUrl: './checkbook.component.html',
  styleUrls: ['./checkbook.component.css']
})
@Injectable({providedIn: 'root'})


export class CheckbookComponent implements OnInit {

  checkbookreq: checkbookreq[] = [];
  checkbookreq1: checkbookreq[] = [];
  approval?: string;
  constructor(private Router: Router, private UserauthenticationService: UserauthenticationService,
   ) { }

   username1 = localStorage.getItem("username");


  ngOnInit(): void {const username = localStorage.getItem("username");
  this.UserauthenticationService.retrieveallcheckrequest().subscribe(
    (checkbookreq) =>  this.checkbookreq = checkbookreq);
    console.log(this.checkbookreq);



}

BD() {

  const username = localStorage.getItem("username");
  for (var i=0; i < this.checkbookreq.length; i++) {
    if (this.checkbookreq[i].username == username)
    {this.checkbookreq1.push(this.checkbookreq[i]);} }

  console.log(this.checkbookreq1);



  }




}


