import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../customer-type';
import {Customer} from '../customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {differenceInYears} from 'date-fns';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  id: number = 0;
  customerTypes: CustomerType[] = [];
  codePattern = '^KH[-][0-9]{4}$';
  idCardPattern = '^([0-9]{12})|([0-9]{9})$';
  emailPattern = '^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$';
  phonePattern = '^(090|091|[(]84[)][+]90|[(]84[)][+]91)[0-9]{7}$';
  customerEditForm: FormGroup = new FormGroup({
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

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(<string> data.get('id'));
      this.getCustomer(this.id);
    });
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
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


  private getCustomer(id: number) {
    console.log(this.customerService.findById(id));
    return this.customerService.findById(id).subscribe(data => {
      this.customerEditForm.patchValue(data);
    });
  }

  onSubmit(id: number) {
    let customer = this.customerEditForm?.value;
    this.customerService.editCustomer(id, customer).subscribe(() => {
      this.route.navigateByUrl('/customer/list');
      alert('Edit success');
    });

  }

  compareCustomerType(cType1: CustomerType, cType2: CustomerType): boolean {
    return cType1 && cType2 ? cType1.id === cType2.id : cType1 === cType2;
  }
}
