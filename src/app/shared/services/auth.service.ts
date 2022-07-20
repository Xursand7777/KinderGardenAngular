import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,
              private tokenStorage: TokenStorageService) { }

  PHP_API = environment.api + 'auth';

  login(request: any): Observable<any> {
    return this._http.post(`${this.PHP_API}/login.php`, request);
  }

  getUser(data: any): Observable<any> {
    return this._http.post(`${this.PHP_API}/getOne.php`, data);
  }

  logOut(): void{
    this.tokenStorage.signOut();
  }
}
