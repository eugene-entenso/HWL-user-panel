import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})

export class LayoutComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        // this.userService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });
    }

}