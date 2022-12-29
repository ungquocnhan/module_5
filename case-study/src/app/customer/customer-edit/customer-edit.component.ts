import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../customer-type';
import {Customer} from '../customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  id: number = 0;
  customerTypes: CustomerType[] = [];
  customerEditForm: FormGroup = new FormGroup({});
  codePattern = '^KH[-][0-9]{4}$';
  idCardPattern = '^([0-9]{12})|([0-9]{9})$';
  emailPattern = '^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$';
  phonePattern = '^(090|091|[(]84[)][+]90|[(]84[)][+]91)[0-9]{7}$';

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(data =>{
      this.id = parseInt(<string> data.get("id"));
      let customer = this.getCustomer(this.id);
      this.customerEditForm = new FormGroup({
        name: new FormControl(customer?.name, [Validators.required, Validators.maxLength(100)]),
        code: new FormControl(customer?.code, [Validators.required, Validators.pattern(this.codePattern)]),
        birthday: new FormControl(customer?.birthday, [Validators.required]),
        gender: new FormControl(customer?.gender, [Validators.required]),
        idCard: new FormControl(customer?.idCard, [Validators.required, Validators.pattern(this.idCardPattern)]),
        phoneNumber: new FormControl(customer?.phoneNumber, [Validators.required, Validators.pattern(this.phonePattern)]),
        email: new FormControl(customer?.email, [Validators.required, Validators.pattern(this.emailPattern)]),
        address: new FormControl(customer?.address, [Validators.required]),
        customerType: new FormControl(customer?.customerType?.id, [Validators.required]),
      });
    });
    this.customerTypes = this.customerService.getAllCustomerType();
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
    return this.customerService.findById(id);
  }

  onSubmit(id: number) {
    let customer = this.customerEditForm?.value;
    this.customerService.editCustomer(id, customer);
    this.route.navigateByUrl("/customer/list");
    alert("Edit success");
  }
}
