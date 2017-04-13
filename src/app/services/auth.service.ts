import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {UtilService} from './index';

@Injectable()
export class AuthService {
    public token: string;

    constructor(private http: Http, private util: UtilService) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            this.token = currentUser && currentUser.token.access_token;
        }
    }

    login(username: string, password: string): Observable<boolean> {
        let client_id = this.util.clientId;
        let client_secret = this.util.clientSecret;
        let grant_type = 'password';
        let body = JSON.stringify({client_id, client_secret, grant_type, username, password});
        return this.http.post(this.util.apiEndPoint + '/login', body, {headers: this.util.commonHeaders})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token.access_token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response.json()));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    signup(name: string, email: string, password: string, password_repeat: string): Observable<boolean> {
        let body = JSON.stringify({name, email, password, password_repeat});
        return this.http.post(this.util.apiEndPoint + '/signup', body, {headers: this.util.commonHeaders})
            .map((response: Response) => {
                return response.json();
            });
    }

    confirm(code: string): Observable<boolean> {
        return this.http.get(this.util.apiEndPoint + '/confirm/' + code, {headers: this.util.commonHeaders})
            .map((response: Response) => {
                return response.json();
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}
