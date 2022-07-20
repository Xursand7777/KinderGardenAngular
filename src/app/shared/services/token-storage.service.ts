import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = environment.token;
const USER_KEY = environment.user;

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): object {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user)
      return JSON.parse(user);
    else
      return {};
  }
}
