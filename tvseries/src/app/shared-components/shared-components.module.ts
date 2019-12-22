import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ImgtvComponent } from './imgtv/imgtv.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent, ImgtvComponent],
  exports: [LoginComponent, ImgtvComponent]
})
export class SharedComponentsModule { }
