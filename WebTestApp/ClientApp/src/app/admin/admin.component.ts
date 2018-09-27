import { Component, Inject } from '@angular/core';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  
    constructor(private readonly securityService: SecurityService) {
      this.securityService.loadAuthorized();
    }

}
