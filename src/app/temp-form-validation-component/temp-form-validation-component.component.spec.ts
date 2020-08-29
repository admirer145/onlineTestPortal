import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFormValidationComponentComponent } from './temp-form-validation-component.component';

describe('TempFormValidationComponentComponent', () => {
  let component: TempFormValidationComponentComponent;
  let fixture: ComponentFixture<TempFormValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempFormValidationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempFormValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
