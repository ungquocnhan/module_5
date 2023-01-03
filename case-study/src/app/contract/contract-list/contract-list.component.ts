import {Component, OnInit} from '@angular/core';
import {Customer} from '../../customer/customer';
import {Facility} from '../../facility/facility';
import {Contract} from '../contract';
import {ContractService} from '../contract.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../customer/customer.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];
  customers: Customer[] = [];

  constructor(private contractService: ContractService,
              private customerService: CustomerService) {
    this.getAllContracts();
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    }, error => {}, () => {});
  }

  private getAllContracts() {
    this.contractService.getAll().subscribe(data => {
      this.contracts = data;
    }, error => {
    }, () => {
    });
  }

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
    customer: new FormControl()
  });
  page: number = 1;
  itemPerPage: number = 6;


  ngOnInit(): void {

  }


  onSearch() {
    console.log(this.searchForm.value.customer.name);
    alert(this.searchForm.value.name);
    let result = this.searchForm.value.name;
    let resultCustomer = this.searchForm.value.customer.name
    if (result == '') {
      this.getAllContracts();
    } else {
      this.contractService.getAll(result, resultCustomer).subscribe(data => {
        console.log(data);
        this.contracts = data;
      }, error => {
      }, () => {
      });
    }
  }
}
