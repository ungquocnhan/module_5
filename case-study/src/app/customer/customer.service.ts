import {Injectable} from '@angular/core';
import {CustomerType} from './customer-type';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerTypes: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinium'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ];

  customers: Customer[] = [
    {
      id: 1,
      name: 'Nguyễn Thị Hào',
      birthday: '1970-11-07',
      gender: false,
      idCard: '643431213',
      phoneNumber: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: this.customerTypes[4]
    },
    {
      id: 2,
      name: 'Phạm Xuân Diệu',
      birthday: '1992-08-08',
      gender: true,
      idCard: '865342123',
      phoneNumber: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: this.customerTypes[2]
    },
    {
      id: 3,
      name: 'Trương Đình Nghệ',
      birthday: '1990-02-27',
      gender: true,
      idCard: '488645199',
      phoneNumber: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: this.customerTypes[0]
    },
    {
      id: 4,
      name: 'Dương Văn Quan',
      birthday: '1981-07-08',
      gender: true,
      idCard: '543432111',
      phoneNumber: '0490039241',
      email: 'duongquan@gmail.com',
      address: 'K453/12 Lê Lợi, Đà Nẵng',
      customerType: this.customerTypes[0]
    },
    {
      id: 5,
      name: 'Hoàng Trần Nhi Nhi',
      birthday: '1995-12-09',
      gender: false,
      idCard: '795453345',
      phoneNumber: '0312345678',
      email: 'nhinhi123@gmail.com',
      address: '224 Lý Thái Tổ, Gia Lai',
      customerType: this.customerTypes[3]
    },
    {
      id: 6,
      name: 'Tôn Nữ Mộc Châu',
      birthday: '2005-12-06',
      gender: false,
      idCard: '732434215',
      phoneNumber: '0988888844',
      email: 'tonnuchau@gmail.com',
      address: '37 Yên Thế, Đà Nẵng',
      customerType: this.customerTypes[3]
    },
    {
      id: 7,
      name: 'Nguyễn Mỹ Kim',
      birthday: '1984-04-08',
      gender: false,
      idCard: '856453123',
      phoneNumber: '0912345698',
      email: 'kimcuong84@gmail.com',
      address: 'K123/45 Lê Lợi, Hồ Chí Minh',
      customerType: this.customerTypes[0]
    },
    {
      id: 8,
      name: 'Nguyễn Thị Hào',
      birthday: '1999-04-08',
      gender: false,
      idCard: '965656433',
      phoneNumber: '0763212345',
      email: 'haohao99@gmail.com',
      address: '55 Nguyễn Văn Linh, Kon Tum',
      customerType: this.customerTypes[2]
    },
    {
      id: 9,
      name: 'Trần Đại Danh',
      birthday: '1994-07-01',
      gender: true,
      idCard: '432341235',
      phoneNumber: '0643343433',
      email: 'danhhai99@gmail.com',
      address: '24 Lý Thường Kiệt, Quảng Ngãi',
      customerType: this.customerTypes[0]
    },
    {
      id: 10,
      name: 'Nguyễn Tâm Đắc',
      birthday: '1989-07-01',
      gender: true,
      idCard: '344343432',
      phoneNumber: '0987654321',
      email: 'dactam@gmail.com',
      address: '22 Ngô Quyền, Đà Nẵng',
      customerType: this.customerTypes[1]
    },
  ];

  constructor() {
  }

  getAll() {
    return this.customers;
  }

  getAllCustomerType() {
    return this.customerTypes;
  }

  saveCustomer(customer: any) {
    this.customers.push(customer);
  }

  findById(id: number | null): Customer | null {
    let temp = this.customers.filter(element => element.id == id);
    if (temp.length == 0) {
      return null;
    }
    return temp[0];
  }

  editCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == id) {
        this.customers[i] = customer;
      }
    }
  }

  deleteById(id: number | undefined) {
    if (id != undefined) {
      let customer = this.findById(id);
      if (customer != null) {
        let length = this.customers.length;
        for (let i = 0; i < length; i++) {
          if (customer.id == this.customers[i].id) {
            this.customers.splice(i, 1);
            break;
          }
        }
      }
    }
  }

}
