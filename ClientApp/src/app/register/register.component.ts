import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SecurityService } from '../../services/security.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss'
  ]
})
export class RegisterComponent {

  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private readonly userService: UserService,
    private readonly securityService: SecurityService,
    private readonly router: Router,
    private readonly notificationService: NotificationsService
  ) {

  }

  onSubmit() {
    if (this.registerForm.get('password').value == this.registerForm.get('confirmPassword').value) {
      this.userService.register(this.registerForm.value).subscribe(res => {
        let user = res.json();
        this.securityService.setUser(user);
        this.notificationService.error("Success", "You have registered")
        setTimeout(() => {
          this.router.navigate(["login"]);
        }, 500);
      }, errors => {
        this.notificationService.error("Error", errors.text())
      })
    }else {
      this.notificationService.error("Error", "Please confirm password.");
    }
  }
}
