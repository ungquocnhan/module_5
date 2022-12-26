import {Component, OnInit} from '@angular/core';
import {Contract} from '../interface/contract/contract';
import {Customer} from '../interface/customer/customer';
import {Facility} from '../interface/facility/facility';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
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
  contracts: Contract[] = [
    {id: 1, startDate: '2020-12-08', endDate: '2020-12-08', customer: this.customers[0], facility: this.facilities[2]},
    {id: 2, startDate: '2020-07-14', endDate: '2020-07-21', deposit: 200000, customer: this.customers[2], facility: this.facilities[0]},
    {id: 3, startDate: '2021-03-15', endDate: '2021-03-17', deposit: 50000, customer: this.customers[3], facility: this.facilities[1]},
    {id: 4, startDate: '2021-01-14', endDate: '2021-01-18', deposit: 100000, customer: this.customers[4], facility: this.facilities[4]},
    {id: 5, startDate: '2021-07-14', endDate: '2021-07-15', customer: this.customers[1], facility: this.facilities[5]},
    {id: 6, startDate: '2021-06-01', endDate: '2021-06-03', customer: this.customers[6], facility: this.facilities[5]},
    {id: 7, startDate: '2021-09-02', endDate: '2021-09-05', deposit: 100000, customer: this.customers[3], facility: this.facilities[3]},
    {id: 8, startDate: '2021-06-17', endDate: '2021-06-18', deposit: 150000, customer: this.customers[3], facility: this.facilities[0]},
    {id: 9, startDate: '2020-11-19', endDate: '2020-11-19', customer: this.customers[3], facility: this.facilities[2]},
    {id: 10, startDate: '2021-04-12', endDate: '2021-04-14', customer: this.customers[2], facility: this.facilities[4]},
    {id: 11, startDate: '2021-04-25', endDate: '2021-04-25', customer: this.customers[1], facility: this.facilities[0]},
    {id: 12, startDate: '2021-05-25', endDate: '2021-05-27', customer: this.customers[9], facility: this.facilities[0]},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
