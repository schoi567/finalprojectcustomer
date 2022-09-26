import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckrequestComponent } from './checkrequest.component';

describe('CheckrequestComponent', () => {
  let component: CheckrequestComponent;
  let fixture: ComponentFixture<CheckrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
