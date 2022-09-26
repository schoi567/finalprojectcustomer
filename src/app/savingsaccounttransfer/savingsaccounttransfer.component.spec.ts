import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsaccounttransferComponent } from './savingsaccounttransfer.component';

describe('SavingsaccounttransferComponent', () => {
  let component: SavingsaccounttransferComponent;
  let fixture: ComponentFixture<SavingsaccounttransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsaccounttransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsaccounttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
