import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ImgtvComponent } from './imgtv/imgtv.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent, ImgtvComponent, RegisterComponent],
  exports: [LoginComponent, ImgtvComponent, RegisterComponent]
})
export class SharedComponentsModule { }
