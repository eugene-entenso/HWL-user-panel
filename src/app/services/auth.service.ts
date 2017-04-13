import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {UtilService} from './index';

@Injectable()
export class AuthService {
    public headers: Headers;
    public menu: {};
    public user: string;
    public token: {};

    constructor(private http: Http, private util: UtilService) {
        this.initUser();
    }

    login(username: string, password: string): Observable<boolean> {
        const client_id = this.util.clientId;
        const client_secret = this.util.clientSecret;
        const grant_type = 'password';
        const body = JSON.stringify({client_id, client_secret, grant_type, username, password});
        const options = new RequestOptions({headers: this.util.commonHeaders});

        return this.http
            .post(this.util.apiEndPoint + '/login', body, options)
            .map((response: Response) => {
                return this.setUser(response.json());
            });
    }

    signup(name: string, email: string, password: string, password_repeat: string): Observable<boolean> {
        const body = JSON.stringify({name, email, password, password_repeat});
        const options = new RequestOptions({headers: this.util.commonHeaders});

        return this.http
            .post(this.util.apiEndPoint + '/signup', body, options)
            .map((response: Response) => {
                return response.json();
            });
    }

    confirm(code: string): Observable<boolean> {
        const options = new RequestOptions({headers: this.util.commonHeaders});

        return this.http
            .get(this.util.apiEndPoint + '/confirm/' + code, options)
            .map((response: Response) => {
                return response.json();
            });
    }

    logout(): void {
        this.unSetUser();
    }

    initUser(): boolean {
        if (!this.isSetUser()) {
            return false;
        }
        const user = this.getUser();
        this.menu = user['menu'];
        this.token = user['token'];
        this.setAuthHeaders(user['token']['token_type'], user['token']['access_token']);
        return true;
    }

    setUser(user: {}): boolean {
        if (!user) {
            return false;
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.initUser();
    }

    getUser(): {} {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    isSetUser(): boolean {
        return !!localStorage.getItem('currentUser');
    }

    unSetUser(): void {
        localStorage.removeItem('currentUser');
        this.token = null;
        this.menu = null;
        this.headers = null;
    }

    setAuthHeaders(token_type: string, access_token: string): void {
        this.headers = new Headers();
        this.headers.append('Authorization', token_type + ' ' + access_token);
    }

}
