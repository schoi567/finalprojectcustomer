import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrprofileresultComponent } from './usrprofileresult.component';

describe('UsrprofileresultComponent', () => {
  let component: UsrprofileresultComponent;
  let fixture: ComponentFixture<UsrprofileresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrprofileresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrprofileresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
