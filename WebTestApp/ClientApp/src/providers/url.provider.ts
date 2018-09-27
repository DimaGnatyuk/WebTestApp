import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
import { GlobalVars } from "../vars/global.vars";

@Injectable()
export class UrlProvider {

    constructor(
        private readonly http: Http, 
        @Inject('BASE_URL') private readonly baseUrl: string,
        private readonly gVars: GlobalVars
        ) {
       
    }

    private setHeaders(): any{
        var user = this.gVars.user;
        if (user){
            return {
                'Authorization': "Bearer " + user.token
            }
        }else {
            return {};
        }
    }

    public get(apiUrl: string, obj?: any): Observable<Response>{
        return this.http.get(this.baseUrl + "api/" + apiUrl, obj ? {body: obj, headers: this.setHeaders()} : {headers: this.setHeaders()});
    }

    public post(apiUrl: string, obj: any): Observable<Response> {
        return this.http.post(this.baseUrl + "api/" + apiUrl, obj, {headers: this.setHeaders()});
    }

    public put(apiUrl: string, obj: any) : Observable<Response>{
        return this.http.put(this.baseUrl + "api/" + apiUrl, obj, {headers: this.setHeaders()});
    }

    public delete(apiUrl: string) : Observable<Response>{
        return this.http.delete(this.baseUrl + "api/" + apiUrl, {headers: this.setHeaders()});
    }
}