import { Component } from '@angular/core';
import { GlobalVars } from '../../vars/global.vars';
import { SecurityService } from '../../services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  constructor(
    public readonly gVars: GlobalVars,
    public readonly securityService: SecurityService,
    private readonly router: Router
  ){

  }

  public logout(){
    this.securityService.delUser();
    this.router.navigate(['/login']);
  }
}
