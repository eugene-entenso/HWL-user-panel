import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})

export class LayoutAdminComponent implements OnInit {

    private menu = [
        {'label': 'Dashboard', 'icon': 'fa-charts', 'route': '/admin/dashboard'},
        {'label': 'Users', 'icon': 'fa-users', 'route': '/admin/users'},
        {'label': 'Swagger', 'icon': 'fa-doc', 'href': '/swagger'},
        {'label': 'PhpMyAdmin', 'icon': 'fa-database', 'href': '/phpmyadmin'},
        {'label': 'Vesta', 'icon': 'fa-sun-o', 'href': window.location.protocol + '//' + window.location.hostname + ':8083'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}