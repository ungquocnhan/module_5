import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  @Input()
  customer: Customer = {};
  deleteForm: FormGroup = new FormGroup({});

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  deleteCustomer() {
    this.customerService.deleteById(this.customer.id).subscribe(() => {
      window.location.reload();
      alert("Delete success");
    });
  }
}
