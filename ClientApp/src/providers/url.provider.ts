import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";

@Injectable()
export class UrlProvider {
    
    constructor(private readonly http: Http, @Inject('BASE_URL') private readonly baseUrl: string) {
       
    }

    public get(apiUrl: string, params?: object): Observable<Response>{
        return this.http.get(this.baseUrl + "api/" + apiUrl, params ? {params: params} : {});
    }

    public post(apiUrl: string, obj: object): Observable<Response> {
        return this.http.post(this.baseUrl + "api/" + apiUrl, obj);
    }

    public put(apiUrl: string, obj: object) : Observable<Response>{
        return this.http.put(this.baseUrl + "api/" + apiUrl, obj);
    }

    public delete(apiUrl: string) : Observable<Response>{
        return this.http.delete(this.baseUrl + "api/" + apiUrl);
    }
}