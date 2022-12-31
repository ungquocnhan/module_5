import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product | null = {};
  productFormEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  id: number = 0;
  categories: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(<string> data.get('id'));
      this.getProduct(this.id);
    });
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    })
  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(data => {
      this.productFormEdit.patchValue(data);
    });
  }

  editProduct(id: number) {
    let product = this.productFormEdit?.value;
    this.productService.editProduct(id, product).subscribe(() => {
      this.route.navigateByUrl('/product/list');
      alert('Edit success');
    }, error => {
      console.log(error);
    });

  }

  compareCategory(item1: Category, item2: Category): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
