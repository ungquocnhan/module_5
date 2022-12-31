import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../customer';
import {CustomerType} from '../customer-type';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { differenceInYears } from 'date-fns';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];

  codePattern: RegExp = /^KH[-][0-9]{4}$/;
  idCardPattern: RegExp =  /^([0-9]{12})$|^([0-9]{9})$/;
  emailPattern = '^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$';
  phonePattern = '^(090|091|[(]84[)][+]90|[(]84[)][+]91)[0-9]{7}$';
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    code: new FormControl('', [Validators.required, Validators.pattern(this.codePattern)]),
    birthday: new FormControl('', [Validators.required, this.validateBirthday]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(this.idCardPattern)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });

  validateBirthday(c: AbstractControl) {
    let date = new Date(c.value);
    let age = differenceInYears(new Date(), date);
    return (age <= 18) ? {'greaterThan18': true} : null;
  }

  get name() {
    return this.customerForm.get('name');
  }

  get code() {
    return this.customerForm.get('code');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  constructor(private customerTypeService: CustomerTypeService,
              private customerService : CustomerService,
              private route: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      this.route.navigateByUrl("/customer/list");
      alert("Create success");
    });
  }
}
