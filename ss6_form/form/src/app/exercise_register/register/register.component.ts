import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from './country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phonePattern = '^([+]84)[0-9]{9,10}$';
  emailPattern = '^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$';
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    pwGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, this.comparePassword),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)])
  });
  countryList: Country[] = [
    {id: 1, name: 'Da Nang'},
    {id: 2, name: 'Ha Noi'},
    {id: 3, name: 'Ho Chi Minh'},
    {id: 4, name: 'Vinh'},
    {id: 5, name: 'Nha Trang'},
  ];
  comparePassword(c: AbstractControl): any{
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {passwordnotmatch : true};
  }
  ngOnInit(): void {
  }
  constructor() { }

  get country(){
    return this.registerForm.get('country');
  }

  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('pwGroup')?.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('pwGroup')?.get('confirmPassword');
  }
  get age(){
    return this.registerForm.get('age');
  }
  get gender(){
    return this.registerForm.get('gender');
  }
  get phone(){
    return this.registerForm.get('phone');
  }
  onSubmit(): void {
    console.log(this.registerForm?.value);
  }
}
