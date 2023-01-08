import {Component, OnInit, ViewChild} from '@angular/core';
import {Consignment} from '../consignment';
import {ConsignmentService} from '../consignment.service';
import {FormGroup} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import {ConsignmentEditComponent} from '../consignment-edit/consignment-edit.component';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-consignment-list',
  templateUrl: './consignment-list.component.html',
  styleUrls: ['./consignment-list.component.css']
})
export class ConsignmentListComponent implements OnInit {
  consignments: Consignment[] = [];
  products: Product[] = [];
  temp: Consignment = {};
  totalElements = 0;
  public code = '';
  public importDate = '';
  public productName = '';

  // tslint:disable-next-line:variable-nam
  @ViewChild(ConsignmentEditComponent) editView !: ConsignmentEditComponent;
  searchForm: FormGroup = new FormGroup({});

  constructor(private consignmentService: ConsignmentService,
              private productService: ProductService) {
    this.getAllConsignment({page: '0', size: '2'});
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  private getAllConsignment(request: { page?: string; size?: string; } | undefined): void {
    this.code = '';
    this.importDate = '';
    this.productName = '';
    this.consignmentService.getAll(request).subscribe(data => {
      console.log(data);
      this.consignments = data.content;
      this.totalElements = data.totalElements;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  reload(): void {
    const request = {};
    this.getAllConsignment(request);
  }

  nextPage(event: PageEvent): void {
    const request = {};
    // @ts-ignore
    request.page = event.pageIndex.toString();
    // @ts-ignore
    request.size = event.pageSize.toString();
    this.getAllConsignment(request);
  }

  edit(id: any): void{
    this.editView.editData(id);

  }

  search(code: string, importDate: string, productName: string): void {
    console.log(code);
    console.log(importDate);
    console.log(productName);
    this.consignmentService.search(code, importDate, productName).subscribe(data => {
      if (data == null){
        alert('Không tìm thấy');
        const request = {};
        this.getAllConsignment(request);
      }else {
        this.consignments = data;
      }
    });
  }
}
