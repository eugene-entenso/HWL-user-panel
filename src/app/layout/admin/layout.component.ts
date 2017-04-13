import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})

export class LayoutAdminComponent implements OnInit {

    public visibleMenu = true;
    menu: {}[] = [];
    tools: {}[] = [];

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.menu = this.auth.menu['common'];
        this.tools = this.auth.menu['tools'];
    }

    issetTools(): boolean {
        return this.tools.length > 0;
    }

    toggleMenu() {
        this.visibleMenu = !this.visibleMenu;
    }

}