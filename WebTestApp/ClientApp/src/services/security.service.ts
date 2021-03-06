import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthUserDto } from "../models/auth.user.dto";
import { StorageService } from "./storage.service";
import { GlobalVars } from "../vars/global.vars";

const USER = 'user';

@Injectable()
export class SecurityService {

    constructor(
            public router: Router,
            private readonly storageService: StorageService,
            private readonly gVars: GlobalVars
        ) {
    }

    public setUser(user: AuthUserDto) {
        this.storageService.set(USER, user);
        this.loadAuthorized();
    }

    public delUser() {
        this.storageService.delete(USER);
        this.loadAuthorized();
    }

    public getUser(): AuthUserDto {
        return <AuthUserDto>this.storageService.get(USER);
    }

    public getUserId(): string {
        return (<AuthUserDto>this.getUser()).id || null;
    }

    public loadAuthorized() {
        var user = this.getUser();
        this.gVars.user = user;
    }
}