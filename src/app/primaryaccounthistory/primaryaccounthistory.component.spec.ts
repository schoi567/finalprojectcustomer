import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryaccounthistoryComponent } from './primaryaccounthistory.component';

describe('PrimaryaccounthistoryComponent', () => {
  let component: PrimaryaccounthistoryComponent;
  let fixture: ComponentFixture<PrimaryaccounthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryaccounthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryaccounthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
