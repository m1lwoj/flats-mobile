import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { User } from './models/user.model';
import { tap, map, catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthService {
    baseUrl = 'http://51.178.26.242:5015/api';

    loginChanged: Subject<string> = new Subject<string>();

    constructor(private httpClient: HttpClient) {
    }

    isAuthenticated(): Observable<Object> {
        return this.httpClient.get(this.baseUrl + '/security/authenticated');
    }

    authenticate(login: string, password: string): Observable<any> {
        return this.httpClient.post<User>(this.baseUrl + '/security/authenticate', { login, password }).pipe(
            catchError(err => {
                return throwError(err);
            }),
        )
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

    setSession(authResult) {
        localStorage.setItem('unique_name', authResult.id);
        localStorage.setItem('id_token', authResult.token);
    }

    hasToken() {
        return localStorage.getItem('id_token');
    }

    setLogin(login) {
        localStorage.setItem('login', login);
        this.loginChanged.next(login);
    }

    getLogin(): string {
        return localStorage.getItem('login');
    }

    getHashedLogin() {
        return Md5.hashStr(this.getLogin());
    }

    logout() {
        localStorage.removeItem('login');
        localStorage.removeItem('unique_name');
        localStorage.removeItem('expires_at');
        this.setLogin('');
    }
}
