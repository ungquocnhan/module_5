import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../../customer/customer';
import {Facility} from '../../facility/facility';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreateForm: FormGroup;

  customers: Customer[] = [];

  facilities: Facility[] = [];

  constructor(private form: FormBuilder,
              private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private router: Router) {
    this.contractCreateForm = this.form.group({
      // contractDate: this.form.group({
      //   startDate: (''),
      //   endDate: ('')
      // }),
      startDate: (''),
      endDate: (''),
      deposit: (''),
      customer: (''),
      employee: (''),
      facility: ('')
    });
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });
    this.facilityService.getAll().subscribe(data => {
      this.facilities = data;
    });
  }

  get startDate(){
    return this.contractCreateForm.get('startDate');
  }get endDate(){
    return this.contractCreateForm.get('endDate');
  }get deposit(){
    return this.contractCreateForm.get('deposit');
  }get customer(){
    return this.contractCreateForm.get('customer');
  }get employee(){
    return this.contractCreateForm.get('employee');
  }get facility(){
    return this.contractCreateForm.get('facility');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let contract = this.contractCreateForm.value;
    this.contractService.save(contract).subscribe(() =>{
      this.contractCreateForm.reset();
      this.router.navigateByUrl("/contract/list");
      alert("Create success");
    })
  }
}
