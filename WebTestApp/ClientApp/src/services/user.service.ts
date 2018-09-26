import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { UrlProvider } from "../providers/url.provider";


@Injectable()
export class UserService {
    
    private url: string = 'user';

    constructor(private readonly urlProvider: UrlProvider) {

    }

    login(dto: object): Observable<Response> {
        return this.urlProvider.post(this.url + '/login', dto);
    }

    register(dto: object): Observable<Response> {
        return this.urlProvider.post(this.url + '/registration', dto);
    }
}