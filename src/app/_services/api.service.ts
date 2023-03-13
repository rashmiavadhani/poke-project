import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) {}

    public getpokemondetails(url: string): Observable<any>{
        let result;
        result = this.http.get(url);
        return result;
    }

}