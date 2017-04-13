import {Component, OnInit} from '@angular/core';

import {Client} from '../../../models/index';
import {OAuthService} from '../../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'clients.component.html'
})

export class OAuthClientsComponent implements OnInit {
    clients: Client[] = [];

    constructor(private oauth: OAuthService) {
    }

    ngOnInit() {
        this.oauth.getClients()
            .subscribe(response => {
                this.clients = response;
            });
    }

}