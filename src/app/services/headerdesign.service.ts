import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {UserauthenticationService } from './userauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderdesignService implements CanActivate{

  constructor(private UserauthenticationService:UserauthenticationService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    if(this.UserauthenticationService.isUserLogin()){
       const username = sessionStorage.getItem("sessionusername");


      return true;}

    else {
      this.router.navigate([""]); }

  }


}


