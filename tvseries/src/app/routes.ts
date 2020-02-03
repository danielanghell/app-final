import { Routes } from '@angular/router';
import { UserComponent } from './shared-components/user/user.component';
import { RegisterComponent } from './shared-components/user/register/register.component';
import { SignInComponent } from './shared-components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'register', component: UserComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];