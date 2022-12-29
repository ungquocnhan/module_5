import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../../customer/customer';
import {Facility} from '../../facility/facility';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreateForm: FormGroup;

  customers: Customer[] = [
    {
      id: 1,
      name: 'Nguyễn Thị Hào'
    },
    {
      id: 2,
      name: 'Phạm Xuân Diệu'
    },
    {
      id: 3,
      name: 'Trương Đình Nghệ'
    },
    {
      id: 4,
      name: 'Dương Văn Quan'
    },
    {
      id: 5,
      name: 'Hoàng Trần Nhi Nhi'
    },
    {
      id: 6,
      name: 'Tôn Nữ Mộc Châu'
    },
    {
      id: 7,
      name: 'Nguyễn Mỹ Kim'
    },
    {
      id: 8,
      name: 'Nguyễn Thị Hào'
    },
    {
      id: 9,
      name: 'Trần Đại Danh'
    },
    {
      id: 10,
      name: 'Nguyễn Tâm Đắc'
    },
  ];
  facilities: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front'
    },
    {
      id: 2,
      name: 'House Princess 01'
    },
    {
      id: 3,
      name: 'Room Twin 01'
    },
    {
      id: 4,
      name: 'Villa No Beach Front'
    },
    {
      id: 5,
      name: 'House Princess 02'
    },
    {
      id: 6,
      name: 'Room Twin 02'
    },
  ];

  constructor(private form: FormBuilder) {
    this.contractCreateForm = this.form.group({
      contractDate: this.form.group({
        startDate: (''),
        endDate: ('')
      }),
      deposit: (''),
      customer: (''),
      employee: (''),
      facility: ('')
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
    console.log(this.contractCreateForm.value);
  }
}
