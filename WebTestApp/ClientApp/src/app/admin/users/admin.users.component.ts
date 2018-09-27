import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../../store/reducers';
import * as userAction from './../../../store/actions/user.actions';
import { UserDto } from '../../../models/user.dto';

@Component({
  selector: 'admin-users-component',
  templateUrl: './admin.users.component.html', 
  styleUrls: [
    './admin.users.component.scss'
  ]
})
export class AdminUsersComponent implements OnInit {
  
  public users$: Observable<UserDto[]>;
  public displayedColumns: string[] = ['email', 'userName', 'phoneNumber'];

  constructor(
    private readonly usersService: UsersService,
    private store: Store<fromRoot.State>) {
    this.users$ = store.select(s=>s.users.users);
  }

  ngOnInit(): void {
    this.usersService.get().subscribe(users => {
      users.json().forEach(user => {
        this.store.dispatch(new userAction.Add(user));
      });
    })
  }

  
}