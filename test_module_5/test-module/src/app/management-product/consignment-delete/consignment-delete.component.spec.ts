import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentDeleteComponent } from './consignment-delete.component';

describe('LoHangDeleteComponent', () => {
  let component: ConsignmentDeleteComponent;
  let fixture: ComponentFixture<ConsignmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
