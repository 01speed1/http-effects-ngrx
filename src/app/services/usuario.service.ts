
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private api:string = "https://reqres.in/api"

    constructor(
        private http:HttpClient
    ){}

    getUsers() {
        return this.http
            .get(`${this.api}/users?per_page=6`)
            .pipe(map( res =>  res['data'] ))
            
    }

}