import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsaccountdetailComponent } from './savingsaccountdetail.component';

describe('SavingsaccountdetailComponent', () => {
  let component: SavingsaccountdetailComponent;
  let fixture: ComponentFixture<SavingsaccountdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsaccountdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsaccountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
