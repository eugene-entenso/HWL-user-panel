import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent}  from './app.component';
import {routing}        from './app.routing';

import {AuthGuard, AuthAdminGuard} from './guards/index';
import {AuthService, UserService, UtilService, OAuthService} from './services/index';
import {LoginComponent} from './login/index';
import {SignupComponent} from './signup/index';
import {ConfirmComponent} from './confirm/index';
import {LayoutComponent, LayoutAdminComponent} from './layout/index';
import {DashboardComponent} from './dashboard/index';
import {UsersComponent} from './users/index';
import {OAuthClientsComponent} from './admin/index';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        ConfirmComponent,
        LayoutComponent,
        LayoutAdminComponent,
        DashboardComponent,
        UsersComponent,
        OAuthClientsComponent,
    ],
    providers: [
        AuthGuard,
        AuthAdminGuard,
        AuthService,
        UserService,
        UtilService,
        OAuthService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}