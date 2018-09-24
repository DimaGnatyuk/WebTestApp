import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SecurityService } from '../../services/security.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private readonly userService: UserService,
    private readonly securityService: SecurityService,
    private readonly router: Router,
    private readonly notificationService: NotificationsService
  ) {
    
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(res => {
      let user = res.json();
      this.securityService.setUser(user);
      this.notificationService.error("Success", "redirecting...")
      setTimeout(()=>{
        this.router.navigate(["admin"]);
      }, 500);
    }, errors =>{
      this.notificationService.error("Error", errors.text())
    })
  }
}
