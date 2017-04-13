import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent {
    model: any = {};
    loading = false;
    errors: any = [];

    constructor(private router: Router, private auth: AuthService) {
    }

    signup() {
        this.loading = true;
        this.auth.signup(this.model.name, this.model.email, this.model.password, this.model.password_repeat)
            .subscribe(
                response => {
                    if (response) {
                        this.router.navigate(['/login']);
                    }
                },
                error => {
                    this.loading = false;
                    this.errors = JSON.parse(error.text()).map(function (err: any) {
                        return err.field + ': ' + err.message;
                    });
                });
    }

}
