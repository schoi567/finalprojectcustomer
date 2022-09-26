import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';



export interface singlecheckbookreq {
  id?: number;
  accept?: boolean;
  accounttype?: any;
  date?: any;
  description?: string;
  username?: string;

 }

export class checkbookreq  {constructor(
 public id: number,
 public accept: boolean,
 public accounttype: any,
 public date: any,
 public description: string,
 public username: string,

) {}
}




@Component({
  selector: 'app-checkrequest',
  templateUrl: './checkrequest.component.html',
  styleUrls: ['./checkrequest.component.css']
})

@Injectable({providedIn: 'root'})

export class CheckrequestComponent implements OnInit {
  Singlecheckbookreq: singlecheckbookreq = { };
  checkbookreq: checkbookreq[] = [];





  constructor(private router: Router, private UserauthenticationService: UserauthenticationService) { }

  ngOnInit(): void {





  }


turnin() {
  const username = localStorage.getItem("username");



  this.UserauthenticationService.makecheckrequest(username, this.Singlecheckbookreq).subscribe(
    response => {
    (Singlecheckbookreq) =>  this.Singlecheckbookreq = Singlecheckbookreq
    alert("Chequebook request success")
   },
    error => {
      alert("Chequebook request failed")
   })
}

checkbookhistory() {
  this.router.navigate(['checkbook']);}

}
