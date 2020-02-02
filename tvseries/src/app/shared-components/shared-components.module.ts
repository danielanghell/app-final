import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ImgtvComponent } from './imgtv/imgtv.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';




@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IonicModule],
  declarations: [LoginComponent, ImgtvComponent, RegisterComponent, UserComponent, SignInComponent, UserProfileComponent],
  exports: [LoginComponent, ImgtvComponent, RegisterComponent, UserComponent, SignInComponent, UserProfileComponent]
})
export class SharedComponentsModule { }
