import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositwithdrawComponent } from './depositwithdraw.component';

describe('DepositwithdrawComponent', () => {
  let component: DepositwithdrawComponent;
  let fixture: ComponentFixture<DepositwithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositwithdrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositwithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
