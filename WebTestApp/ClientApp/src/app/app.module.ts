import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../services/auth.guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin/users/admin.users.component';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
 
import { StorageService } from '../services/storage.service';
import { SecurityService } from '../services/security.service';
import { LoginComponent } from './login/login.component';
import { UserService } from '../services/user.service';
import { UsersService } from '../services/users.service';
import { UrlProvider } from '../providers/url.provider';
import { HttpModule } from '@angular/http';

import { GlobalVars } from './../vars/global.vars';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import 'hammerjs';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

export const MATERIAL_MODULES = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
];

import { SimpleNotificationsModule } from 'angular2-notifications';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    //Main component
    AppComponent,

    //Public components
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,

    //Private components
    AdminComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      
      { path: 'admin', redirectTo: 'admin/users', pathMatch: 'full' },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'users', component: AdminUsersComponent },
        ],
        canActivate: [AuthGuardService]
      },

      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
      
    ]),
    ...MATERIAL_MODULES,
    StoreModule.forRoot(reducers, { metaReducers }),
    MatNativeDateModule,
    SimpleNotificationsModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    GlobalVars,
    UrlProvider,
    StorageService,
    SecurityService,
    AuthGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    UserService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
