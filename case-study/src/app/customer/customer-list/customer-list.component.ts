import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  temp: Customer = {};
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
    this.customers = this.customerService.getAll();
  }

  ngOnInit(): void {
  }

}
