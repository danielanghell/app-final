import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }


  constructor(private fb: FormBuilder, private router: Router) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    address: [''],
    phone: ['']
  });


  //loginForm = new FormGroup({
  //userName: new FormControl(''),
  //password: new FormControl('')
  //});

  ngOnInit() { }

}
