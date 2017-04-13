import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/index';
import {SignupComponent} from './signup/index';
import {ConfirmComponent} from './confirm/index';
import {LayoutComponent, LayoutAdminComponent} from './layout/index';
import {HomeComponent} from './home/index';
import {UsersComponent} from './users/index';
import {AuthGuard, AuthAdminGuard} from './guards/index';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'confirm/:code', component: ConfirmComponent},
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'users', component: UsersComponent},
        ]
    },
    {
        path: 'admin',
        component: LayoutAdminComponent,
        canActivate: [AuthAdminGuard],
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'users', component: UsersComponent},
        ]
    },

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);