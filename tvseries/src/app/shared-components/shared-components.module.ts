import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ImgtvComponent } from './imgtv/imgtv.component';


@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent,ImgtvComponent],
  exports: [LoginComponent,ImgtvComponent]
})
export class SharedComponentsModule { }
