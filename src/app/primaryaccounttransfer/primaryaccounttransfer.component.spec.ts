import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryaccounttransferComponent } from './primaryaccounttransfer.component';

describe('PrimaryaccounttransferComponent', () => {
  let component: PrimaryaccounttransferComponent;
  let fixture: ComponentFixture<PrimaryaccounttransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryaccounttransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryaccounttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
