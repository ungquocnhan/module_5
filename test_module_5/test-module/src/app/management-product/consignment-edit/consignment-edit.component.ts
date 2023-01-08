import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Consignment} from '../consignment';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {ConsignmentService} from '../consignment.service';

@Component({
  selector: 'app-consignment-edit',
  templateUrl: './consignment-edit.component.html',
  styleUrls: ['./consignment-edit.component.css']
})
export class ConsignmentEditComponent implements OnInit {
  @Input()
  consignment: Consignment = {};

  @Output()
  eventEdit = new EventEmitter();
  products: Product[] = [];
  codePattern: RegExp = /^LH[-][0-9]{4}$/;
  formEdit: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern(this.codePattern)]),
    product: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    importDate: new FormControl('', [Validators.required]),
    productionDate: new FormControl('', [Validators.required]),
    expirationDate: new FormControl('', [Validators.required])
  });

  get code() {
    return this.formEdit.get('code');
  }

  get product() {
    return this.formEdit.get('product');
  }

  get amount() {
    return this.formEdit.get('amount');
  }

  get importDate() {
    return this.formEdit.get('importDate');
  }

  get productionDate() {
    return this.formEdit.get('productionDate');
  }

  get expirationDate() {
    return this.formEdit.get('expirationDate');
  }
  constructor(private productService: ProductService,
              private consignmentService: ConsignmentService) {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
  }

  editConsignment(): void {
    console.log(this.formEdit.value);
    const consignment = this.formEdit.value;
    this.consignmentService.edit(this.consignment.id, consignment).subscribe(() => {
      console.log('2');
      console.log(this.consignment);
      this.eventEdit.emit();
      alert('Sửa thành công');
    });
  }

  editData(id: any): void {
    console.log('1');
    console.log(id);
    this.consignmentService.findId(id).subscribe(data => {
      this.consignment = data;
      this.formEdit.setValue({
        id: this.consignment.id,
        code: this.consignment.code,
        amount: this.consignment.amount,
        importDate: this.consignment.importDate,
        productionDate: this.consignment.productionDate,
        expirationDate: this.consignment.expirationDate,
        product: this.consignment.product
      });
      console.log(this.formEdit);
    });
  }

  compareProduct(product1: Product, product2: Product): boolean {
    return product1.id === product2.id;
  }
}
