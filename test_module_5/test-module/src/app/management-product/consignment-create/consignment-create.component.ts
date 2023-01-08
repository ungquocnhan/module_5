import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ConsignmentService} from '../consignment.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consignment-create',
  templateUrl: './consignment-create.component.html',
  styleUrls: ['./consignment-create.component.css']
})
export class ConsignmentCreateComponent implements OnInit {
  products: Product[] = [];
  codePattern: RegExp = /^LH[-][0-9]{4}$/;
  formCreate: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(this.codePattern)]),
    product: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    importDate: new FormControl('', [Validators.required]),
    productionDate: new FormControl('', [Validators.required]),
    expirationDate: new FormControl('', [Validators.required])
  });

  get code() {
    return this.formCreate.get('code');
  }

  get product() {
    return this.formCreate.get('product');
  }

  get amount() {
    return this.formCreate.get('amount');
  }

  get importDate() {
    return this.formCreate.get('importDate');
  }

  get productionDate() {
    return this.formCreate.get('productionDate');
  }

  get expirationDate() {
    return this.formCreate.get('expirationDate');
  }

  constructor(private productService: ProductService,
              private consignmentService: ConsignmentService,
              private router: Router) {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const consignment = this.formCreate.value;
    this.consignmentService.save(consignment).subscribe(() => {
      this.formCreate.reset();
      alert('Nhập hàng thành công');
      this.router.navigateByUrl('/consignment/list');
    });
  }
}
