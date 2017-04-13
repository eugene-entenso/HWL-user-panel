import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';

@Injectable()
export class UtilService {

    public apiEndPoint: string;
    public clientId: string;
    public clientSecret: string;
    public commonHeaders: Headers;

    constructor() {
        this.setClient();
        this.setApiEndPoint();
        this.setCommonHeaders();
    }

    setCommonHeaders(): void {
        this.commonHeaders = new Headers();
        this.commonHeaders.append('Accept', 'application/json');
        this.commonHeaders.append('Content-Type', 'application/json');
    }

    setApiEndPoint(): void {
        switch (window.location.hostname) {
            case '138.197.39.143':
                this.apiEndPoint = 'http://138.197.39.143/api';
                break;
            case 'localhost':
                this.apiEndPoint = 'http://hwl/api';
                break;
            default:
                this.apiEndPoint = '/api';
        }
    }

    setClient(id: string = 'user-panel'): void {
        this.clientId = id;
        switch (window.location.hostname) {
            case '138.197.39.143':
                this.clientSecret = 'HxRu0AEHhHWNnG47';
                break;
            default:
                this.clientSecret = 'pQwffVnq8KL8qNNC';
        }
    }

}
