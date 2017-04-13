import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    users: User[] = [];

    constructor() {}

    ngOnInit() {}

}