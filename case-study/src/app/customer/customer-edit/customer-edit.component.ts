import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEditForm: FormGroup;
  codePattern = '^KH[-][0-9]{4}$';
  idCardPattern = '^([0-9]{12})|([0-9]{9})$';
  emailPattern = '^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$';
  phonePattern = '^(090|091|[(]84[)][+]90|[(]84[)][+]91)[0-9]{7}$';
  customerTypes: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinium'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ];
  constructor() {
    this.customerEditForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      code: new FormControl('', [Validators.required, Validators.pattern(this.codePattern)]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(this.idCardPattern)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
    });
  }
  get name() {
    return this.customerEditForm.get('name');
  }

  get code() {
    return this.customerEditForm.get('code');
  }

  get birthday() {
    return this.customerEditForm.get('birthday');
  }

  get gender() {
    return this.customerEditForm.get('gender');
  }

  get idCard() {
    return this.customerEditForm.get('idCard');
  }

  get phoneNumber() {
    return this.customerEditForm.get('phoneNumber');
  }

  get email() {
    return this.customerEditForm.get('email');
  }

  get address() {
    return this.customerEditForm.get('address');
  }

  get customerType() {
    return this.customerEditForm.get('customerType');
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.customerEditForm);
  }

}
