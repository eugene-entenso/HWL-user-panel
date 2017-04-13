import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/index';
import {SignupComponent} from './signup/index';
import {ConfirmComponent} from './confirm/index';
import {LayoutComponent, LayoutAdminComponent} from './layout/index';
import {DashboardComponent} from './dashboard/index';
import {UsersComponent} from './users/index';
import {OAuthClientsComponent} from './admin/index';
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
            {path: 'dashboard', component: DashboardComponent},
            {path: 'users', component: UsersComponent},
        ]
    },
    {
        path: 'admin',
        component: LayoutAdminComponent,
        canActivate: [AuthAdminGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'users', component: UsersComponent},
            {path: 'oauth/clients', component: OAuthClientsComponent},
        ]
    },

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);