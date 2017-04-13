import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'confirm.component.html',
    styleUrls: ['confirm.component.css']
})

export class ConfirmComponent implements OnInit {
    loading = false;
    error = '';
    activated = false;

    constructor(private route: ActivatedRoute, private auth: AuthService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.code && params.code.length > 0) {
                this.confirm(params.code);
            }
        });

    }

    confirm(code: string) {
        this.loading = true;
        this.auth.confirm(code)
            .subscribe(
                response => {
                    this.activated = response;
                    this.loading = false;
                },
                error => {
                    this.error = JSON.parse(error.text()).message;
                    this.loading = false;
                });
    }

}
