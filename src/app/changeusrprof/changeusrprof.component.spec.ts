import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeusrprofComponent } from './changeusrprof.component';

describe('ChangeusrprofComponent', () => {
  let component: ChangeusrprofComponent;
  let fixture: ComponentFixture<ChangeusrprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeusrprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeusrprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
