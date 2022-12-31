import { Component, OnInit } from '@angular/core';
import {Customer} from '../../customer/customer';
import {Facility} from '../../facility/facility';
import {Contract} from '../contract';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];
  constructor(private contractService: ContractService) {
    this.contractService.getAll().subscribe(data => {
      this.contracts = data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

}
