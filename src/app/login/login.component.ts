import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthService} from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(private router: Router, private auth: AuthService) {
    }

    ngOnInit() {
        // reset login status
        this.auth.logout();
    }

    login() {
        this.loading = true;
        this.auth.login(this.model.username, this.model.password)
            .subscribe(
                response => {
                    if (response === true) {
                        switch (this.auth.token['scope'].role) {
                            case 'root':
                            case 'admin':
                                this.router.navigate(['/admin/dashboard']);
                                break;
                            case 'user':
                                this.router.navigate(['/dashboard']);
                                break;
                        }
                    }
                },
                error => {
                    this.loading = false;
                    this.error = JSON.parse(error.text()).message;
                });
    }

}
