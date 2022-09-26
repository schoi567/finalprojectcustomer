import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingaccountdetailComponent } from './checkingaccountdetail.component';

describe('CheckingaccountdetailComponent', () => {
  let component: CheckingaccountdetailComponent;
  let fixture: ComponentFixture<CheckingaccountdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingaccountdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingaccountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
