import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { atSignValidator } from '../shared-functions/atsign.validator';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  // registrationForm = new FormGroup({
  // userName: new FormControl(''),
  //password: new FormControl('')
  //});



  ngOnInit() {


  }

  onClick($event) {
    console.log(this.registrationForm.value);
  }

  onSelect($event) {
    this.router.navigate(['register']);
  }
}


