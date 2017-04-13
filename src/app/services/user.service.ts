import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

import {AuthService, UtilService} from './index';
import {User} from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http, private auth: AuthService, private util: UtilService) {
    }

    getUsers(): Observable<User[]> {
        const options = new RequestOptions({headers: Object.assign(this.util.commonHeaders, this.auth.headers)});

        return this.http
            .get(this.util.apiEndPoint + '/v1/users', options)
            .map((response: Response) => response.json());
    }

}
