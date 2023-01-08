import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Manufacture} from '../manufacture';
import {ManufactureService} from '../manufacture.service';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  manufactures: Manufacture[] = [];
  codePattern: RegExp = /^PM-[0-9]{4}$/;
  formCreate: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(this.codePattern)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    dateProduct: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    manufacture: new FormControl('', [Validators.required])
  });
  constructor(private manufactureService: ManufactureService,
              private productService: ProductService,
              private router: Router) {
    this.manufactureService.getAll().subscribe(data => {
      this.manufactures = data;
    });
  }

  ngOnInit(): void {
  }

  get code() {
    return this.formCreate.get('code');
  }

  get dateProduct() {
    return this.formCreate.get('dateProduct');
  }

  get name() {
    return this.formCreate.get('name');
  }

  get description() {
    return this.formCreate.get('description');
  }

  get manufacture() {
    return this.formCreate.get('manufacture');
  }

  onSubmit() {
    const product = this.formCreate.value;
    this.productService.save(product).subscribe(() => {
      this.formCreate.reset();
      alert('Tạo thành công');
      this.router.navigateByUrl('/product/list');
    }, error => {
      console.log(error);
    });
  }
}
