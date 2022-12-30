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
  productFormEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(<string> data.get('id'));
      this.getProduct(this.id);
    });
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
}
