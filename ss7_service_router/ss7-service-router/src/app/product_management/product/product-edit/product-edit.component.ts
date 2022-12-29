import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product | null = {};
  productFormEdit: FormGroup = new FormGroup({});
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(<string> data.get('id'));
      let product = this.getProduct(this.id);
      this.productFormEdit = new FormGroup({
        id: new FormControl(product?.id),
        name: new FormControl(product?.name),
        price: new FormControl(product?.price),
        description: new FormControl(product?.description)
      });
    });
  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
    return this.productService.findById(id);
  }

  editProduct(id: number) {
    let product = this.productFormEdit?.value;
    this.productService.editProduct(id, product);
    this.route.navigateByUrl('product/list');
    alert('Edit success');
  }
}
