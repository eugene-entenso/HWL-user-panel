import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {AuthService, UtilService} from './index';
import {Client} from '../models/index';

@Injectable()
export class OAuthService {
    constructor(private http: Http, private auth: AuthService, private util: UtilService) {
    }

    getClients(): Observable<Client[]> {
        const options = new RequestOptions({headers: Object.assign(this.util.commonHeaders, this.auth.headers)});

        return this.http
            .get(this.util.apiEndPoint + '/v1/oauth/clients', options)
            .map((response: Response) => response.json());
    }

}
