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
    }, error => {
    }, () => {
    });
  }

  private getAllContracts() {
    this.contractService.getAll().subscribe(data => {
      this.contracts = data;
    }, error => {
    }, () => {
    });
  }

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    customer: new FormControl('')
  });
  page: number = 1;
  itemPerPage: number = 6;
  temp: Contract = {};


  ngOnInit(): void {

  }


  onSearch() {
    let resultCustomer = this.searchForm.value.customer?.id;
    let resultName = this.searchForm.value.name;
    if (resultName == null && resultCustomer != '') {
      this.contractService.getAll(null, resultCustomer).subscribe(data => {
        this.contracts = data;
      }, error => {
      }, () => {
      });
    } else if (resultName == '' && resultCustomer != '') {
      this.contractService.getAll(null, resultCustomer).subscribe(data => {
        this.contracts = data;
      }, error => {
      }, () => {
      });
    } else if (resultName == '') {
      this.getAllContracts();
    } else {
      this.contractService.getAll(resultName, resultCustomer).subscribe(data => {
        this.contracts = data;
      }, error => {
      }, () => {
      });

    }
    // this.contractService.getAll(resultName, resultCustomer).subscribe(data => {
    //   this.contracts = data;
    // }, error => {
    // }, () => {
    // });
  }


  reload() {
    this.getAllContracts();
  }
}
