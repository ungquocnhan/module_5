import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutListComponent } from './product-list.component';

describe('ProdutListComponent', () => {
  let component: ProdutListComponent;
  let fixture: ComponentFixture<ProdutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
