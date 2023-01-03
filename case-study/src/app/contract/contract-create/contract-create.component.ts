import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../../customer/customer';
import {Facility} from '../../facility/facility';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../../employee/employee.service';
import {Employee} from '../../employee/employee';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreateForm: FormGroup;

  customers: Customer[] = [];

  facilities: Facility[] = [];
  employees: Employee[] = [];

  constructor(private form: FormBuilder,
              private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private employeeService: EmployeeService,
              private router: Router) {
    this.contractCreateForm = this.form.group({
      // contractDate: this.form.group({
      //   startDate: (''),
      //   endDate: ('')
      // }),
      dateStart: (''),
      dateEnd: (''),
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
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  get dateStart(){
    return this.contractCreateForm.get('dateStart');
  }get dateEnd(){
    return this.contractCreateForm.get('dateEnd');
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
    console.log(this.contractCreateForm.value);
    this.contractService.save(contract).subscribe(() =>{
      this.contractCreateForm.reset();
      this.router.navigateByUrl("/contract/list");
      alert("Create success");
    })
  }
}
