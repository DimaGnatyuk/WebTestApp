import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { UrlProvider } from "../providers/url.provider";


@Injectable()
export class UsersService {
    
    private url: string = 'users';

    constructor(private readonly urlProvider: UrlProvider) {

    }

    get(): Observable<Response> {
        return this.urlProvider.get(this.url);
    }
}