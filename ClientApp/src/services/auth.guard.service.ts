import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelper } from 'angular2-jwt';
import { SecurityService } from "./security.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  private jwtHelper: JwtHelper = new JwtHelper();


  constructor(
      private readonly router: Router,
      private readonly securityService: SecurityService
      ) {

  }

  public canActivate() {
    let user = this.securityService.getUser();

    var token = user != null ? user.token : null;
    debugger
    if (user && token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    
    this.router.navigate(["login"]);
    
    return false;
  }
}