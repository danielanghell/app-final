import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared-components/user/register/register.component';
import { UserComponent } from './shared-components/user/user.component';
import { SignInComponent } from './shared-components/user/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: RegisterComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

})
export class AppRoutingModule { }

