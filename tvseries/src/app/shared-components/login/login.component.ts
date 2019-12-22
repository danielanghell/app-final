import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['']
  });

  // registrationForm = new FormGroup({
  // userName: new FormControl(''),
  //password: new FormControl('')
  //});



  ngOnInit() {


  }

}


