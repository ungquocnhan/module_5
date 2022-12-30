import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });
  id: number = 0;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string> paramMap.get('id'));
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }

  private getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm.patchValue(category);
    });
  }

  updateCategory(id: number) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category).subscribe(() => {
      alert('Cập nhật thành công');
      this.route.navigateByUrl("/category/list")
    }, e => {
      console.log(e);
    });
  }
}
