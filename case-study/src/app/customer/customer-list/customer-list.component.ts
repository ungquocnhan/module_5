import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html' ,
  styleUrls: ['./customer-list.component.css'],

})
export class CustomerListComponent implements OnInit {
  temp: Customer = {};
  customers: Customer[] = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  constructor(private customerService: CustomerService) {
    this.getAllCustomer();
  }

  private getAllCustomer() {
    this.customerService.getAll().subscribe(data => {
        this.customers = data;
      }, error => {
      }, () => {
      }
    );
  }

  ngOnInit(): void {

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllCustomer();
  }
}
