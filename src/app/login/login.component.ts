import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';

export interface customers {
   id?: number;
   username?: string;
   password?: any;
   email?: any;
   phonenumber?: any;
   firstname?: string;
   lastname?: string;
   primaryaccountnumber?: any;
   savingsaccountnumber?: any
   block?: any

  }

export class allcustomers  {constructor(
  public id: number,
  public username: string,
  public password: string,
  public email: any,
  public phonenumber: any,
  public firstname: string,
  public lastname: string,
  public primaryaccountnumber: any,
  public savingsaccountnumber: any,
  public block: any
) {}
}


export interface singleaccounts {
 id?: number,
 savingsaccountnumber?: BigInt,
 primaryaccountnumber?: BigInt, }

export class accounts  {constructor(
  public id?: number,
  public savingsaccountnumber?: BigInt,
  public primaryaccountnumber?: BigInt,

) {}
}


@Injectable({providedIn: 'root'})


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  Customers: customers = {      };
  AllCustomers: allcustomers[] = [];
  username?: any;
  password?: any;
  customersid?: number;
  sessionusername?: any;
  sessionpassword?: any;

  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  isLoaded:boolean = false;
  rememberme?:any;
  rememberme1?:string;
  sessionrememberme?:any;





 myFunction() {
  var chkPrint = <HTMLInputElement>document.getElementById("chkPrint");
  if (chkPrint.checked == true) {
      chkPrint.value = "true";
      this.rememberme = "checked";
      localStorage.setItem("checked", this.rememberme);
      const x = localStorage.getItem("checked");
      console.log(x);

  }

  if (chkPrint.checked == false) {
    chkPrint.value = "false";
    this.rememberme = "unchecked"
     localStorage.setItem("checked", this.rememberme);
     const y = localStorage.getItem("checked")
    console.log(y)
}

}





  constructor(private router: Router, private UserauthenticationService: UserauthenticationService) { }

ngOnInit(): void {this.UserauthenticationService.retrieveallcustomers().subscribe(
  (Customers) =>  this.AllCustomers= Customers);
  const gothrough1 = sessionStorage.getItem('gothrough');
  const gothrough = localStorage.getItem('gothrough');

  console.log(gothrough1);
  console.log(gothrough);


  if (gothrough == "gothrough")
  {   const username = localStorage.getItem('username');
     const password = localStorage.getItem('password');
      this.router.navigate(['uprofile',username]);
    }

  if (gothrough1 == "gothrough"){
      const username = localStorage.getItem('username');
    //  const sessionusername = sessionStorage.getItem('sessionusername');

    this.router.navigate(['uprofile',username]);
  }

}







handleLogin()
{const x = localStorage.getItem("checked");
  var login = this.AllCustomers.map(({username, password}) => ({username, password}) );
for(var i = 0; i < login.length; i++)
{if ((this.username == login[i].username) && (this.password== login[i].password))
  {    if (x  == "checked") {
    if (this.AllCustomers[i].block == "yes")
    { alert ("Your Account is blocked, please call ICIN Bank.");
    return;
    }

    this.customersid = this.AllCustomers[i].id

    localStorage.setItem('customersid', this.customersid.toString());

    localStorage.setItem('password', this.password);
    localStorage.setItem('username', this.username);
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    this.rememberme1  = "gothrough"
    localStorage.setItem("gothrough", this.rememberme1);



    localStorage.setItem('firstname', this.AllCustomers[i].firstname);
    console.log( localStorage.getItem("firstname"));

    this.router.navigate(['uprofile',username]);


  }
  if (x  !== "checked")
{
  if (this.AllCustomers[i].block == "yes")
  { alert ("Your Account is blocked, please call ICIN Bank.");
  this.invalidLogin = false;
  return;
  }


  this.customersid = this.AllCustomers[i].id

  localStorage.setItem('customersid', this.customersid.toString());
    localStorage.setItem('password', this.password);
    localStorage.setItem('username', this.username);
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    /* sessionStorage.setItem("sessionusername", this.username);
    sessionStorage.setItem('sessionpassword', this.password);
    const sessionusername = sessionStorage.getItem('sessionusername');
    const sessionpassword = sessionStorage.getItem('sessionpassword');  */
    this.sessionrememberme = "gothrough"
    sessionStorage.setItem("gothrough", this.sessionrememberme);


    localStorage.setItem('firstname', this.AllCustomers[i].firstname);
    console.log( localStorage.getItem("firstname"));


    this.router.navigate(['uprofile',username]);


}
  }




else {this.invalidLogin = true}
    }
     }




signup() {
 this.router.navigate(['signup'])   }








}










/*

async authenticate( ) {
  this.UserauthenticationService.retrievecustomer(this.username).subscribe(
    (Customers) =>  this.Customers= Customers  )




}



  // async authenticate(  ) {

  //   this.UserauthenticationService.retrievecustomer(this.username).subscribe(

  //     (Customers) =>  (this.Customers= Customers)  );

/*   async handleLogin() {}
    this.authenticate();
console.log(this.username);
this.UserauthenticationService.retrievecustomer(this.username).subscribe(
  (Customers) =>  this.Customers= Customers  )


 await this.authenticate();


 this.check();

*/
  /*is much less permissive than any: we have to do some form of checking before performing
  most operations on values of type unknown, whereas we don't have to do any checks before
  performing operations on values of type any.
This post focuses on the practical aspects of the unknown type,
including a comparison with the any type. For a comprehensive code example showing the semantics of the unknown type, check out Anders Hejlsberg's original pull request.
*/
/*  retrieveallcustomers() {
    this.UserauthenticationService.retrieveallcustomers().subscribe(
      (AllCustomers) => (this.AllCustomers = AllCustomers)
      );


  }*/


/*


  check( ) {
    if ( this.password == this.Customers.password){
      this.router.navigate(['uprofile'])
    console.log("logged in ");
  }
  else {
    this.authenticate();

    console.log("bl dad");

}}



  resolve () {   this.authenticate();
  return new Promise((resolve) => {

      resolve(this.authenticate())


  });
}


 async delay()  {
    this.authenticate();

    await this.resolve ();

    this.check();

//     this.authenticate().then(() => {this.check();
//  console.log("success");
//    } ).
//    catch(err => {console.log(err);})  }



  }


*/
