import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ImgtvComponent } from './imgtv/imgtv.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IonicModule],
  declarations: [LoginComponent, ImgtvComponent, RegisterComponent],
  exports: [LoginComponent, ImgtvComponent, RegisterComponent]
})
export class SharedComponentsModule { }
