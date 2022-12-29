import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  @Input()
  product: Product = {};

  constructor(private productService: ProductService) { }
  deleteForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
  }

  deleteProduct() {
    console.log(this.product.id);
    this.productService.deleteById(this.product.id);
  }
}
