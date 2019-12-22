import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit() {


  }

}


