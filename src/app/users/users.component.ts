import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
    users: User[] = [];

    constructor(private user: UserService) { }

    ngOnInit() {
        this.user.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

}