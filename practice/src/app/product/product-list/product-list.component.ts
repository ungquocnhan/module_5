import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  page = 1;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    }, error => {}, () => {});
  }

  ngOnInit(): void {
  }

}
