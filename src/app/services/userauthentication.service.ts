import { checkbookreq } from './../checkrequest/checkrequest.component';
import { singlecheckbookreq } from './../checkrequest/checkrequest.component';
import { Injectable } from '@angular/core';
import { customers } from 'src/app/login/login.component';
import { allcustomers } from 'src/app/login/login.component';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { accounts } from 'src/app/login/login.component';
import { retry, catchError } from 'rxjs/operators'
import { singleaccounts } from 'src/app/login/login.component';
import { CheckrequestComponent } from 'src/app/checkrequest/checkrequest.component';
import { DepositwithdrawComponent } from '../depositwithdraw/depositwithdraw.component';
import { depositwithdrawmoney } from '../depositwithdraw/depositwithdraw.component';
import { depositwithdrawmoney1 } from '../depositwithdraw/depositwithdraw.component';
import { transfer } from '../header/header.component';
import { alltransfers } from '../header/header.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})




export class UserauthenticationService {

  constructor(private http:HttpClient) { }

  isUserLogin(){
    let loggedin = sessionStorage.getItem("gothrough");
    let loggedin1 = localStorage.getItem("gothrough");
  return !(loggedin===null && loggedin1===null); }

  createaccount(customers: any): Observable<customers>   {
    return this.http.post(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/customers`,customers);
  }

  retrievecustomer(username: any): Observable<customers> {
    return this.http.get<customers>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/customers/login/${username}`)
  }

  retrieveallcustomers() {
    return this.http.get<allcustomers[]>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/customers`)
  }

  updatecustomers(username: any, customers: any): Observable<customers> {
  return this.http.put<customers>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/customers/change/${username}`,customers)
  }

  retrieveallaccounts():  Observable<accounts[]>  {
    return this.http.get<accounts[]>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/customers/accounts`)
  }

  retrieveoneaccount(id: number):  Observable<singleaccounts>  {
    return this.http.get<singleaccounts>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/customers/accounts/${id}`)
  }

  retrieveallcheckrequest():  Observable<checkbookreq[]>  {
    return this.http.get<checkbookreq[]>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/checkrequests`)
  }

  makecheckrequest(username: any, singlecheckbookreq: singlecheckbookreq): Observable<singlecheckbookreq> {
    return this.http.post<singlecheckbookreq>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/checkrequests/${username}`,singlecheckbookreq)
  }

  depositwithdraw(username: any, depositwithdrawmoney:depositwithdrawmoney): Observable<depositwithdrawmoney> {
    return this.http.post<depositwithdrawmoney>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/depositwithdrawmoney`,depositwithdrawmoney)
  }

  retrievealldepositwithdraw(): Observable<depositwithdrawmoney[]> {
    return this.http.get<depositwithdrawmoney1[]>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/depositwithdrawmoney/all`)
  }

  retrievedepositwithdraw(username: any ): Observable<depositwithdrawmoney[]> {
    return this.http.get<depositwithdrawmoney1[]>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/depositwithdrawmoney/all/username/${username}`)
  }

  transfer(transfer:transfer): Observable<transfer> {
    return this.http.post<transfer>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/transfermoney`,transfer)
  }

  receivesingletransfer(id: any): Observable<transfer> {
    return this.http.get<transfer>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/transfermoney/${id}`)
  }

  receivetransfer(fromusername: any): Observable<alltransfers[]> {
    return this.http.get<alltransfers[]>(`http://ec2-3-236-119-16.compute-1.amazonaws.com:8080/transfermoney/username/${fromusername}` )
  }

}




