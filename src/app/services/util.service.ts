import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';

@Injectable()
export class UtilService {

    public apiEndPoint: string;
    public clientId: string;
    public clientSecret: string;
    public commonHeaders: Headers;

    constructor() {
        this.clientId = 'user-panel';
        this.clientSecret = 'HxRu0AEHhHWNnG47';

        switch (window.location.hostname) {
            case '138.197.39.143':
                this.apiEndPoint = 'http://138.197.39.143/api';
                break;
            default:
                this.apiEndPoint = '/api';
        }

        this.commonHeaders = new Headers();
        this.commonHeaders.append('Accept', 'application/json');
        this.commonHeaders.append('Content-Type', 'application/json');
    }

}
