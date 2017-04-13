import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../../services/index';

@Injectable()
export class AuthAdminGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate() {
        if (!this.auth.isSetUser()) {
            this.router.navigate(['/login']);
            return false;

        }

        switch (this.auth.token['scope'].role) {
            case 'root':
            case 'admin':
                return true;
            case 'user':
                this.router.navigate(['/dashboard']);
                return false;
            default:
                return false;
        }
    }
}