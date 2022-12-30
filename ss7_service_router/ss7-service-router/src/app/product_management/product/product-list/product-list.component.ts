import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  temp: Product = {};
  products: Product[] = [];
  categories: Category[] = [];
  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
    this.getAll();
    this.getAllCategory();
  }

  ngOnInit(): void {
  }
  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
