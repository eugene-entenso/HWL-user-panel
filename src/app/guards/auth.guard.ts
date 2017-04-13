import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let user = localStorage.getItem('currentUser');
        if (!user) {
            this.router.navigate(['/login']);
            return false;

        }

        switch (JSON.parse(user).token.scope.role) {
            case 'root':
            case 'user':
                return true;
            case 'admin':
                this.router.navigate(['/admin/home']);
                return false;
            default:
                return false;
        }
    }
}