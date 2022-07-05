import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerSignupComponent } from './customer-signup.component';

describe('CustomerSignupComponent', () => {
  let component: CustomerSignupComponent;
  let fixture: ComponentFixture<CustomerSignupComponent>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSignupComponent ],
      imports: [FormsModule,ReactiveFormsModule, SharedModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement.query(By.css('.signup-form'));
    htmlEl = debugEl.nativeElement;
  });

  it('should contain "Register"', () => {
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.textContent).toContain("REGISTER");
  });

  it('should create customer sign up', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading to true', () => {
    component.form.controls["name"].setValue('swapnil');
    component.form.controls["email"].setValue('swapnil@tesr.com');
    component.form.controls["password"].setValue('admin123');
    component.register();
    expect(component.loading).toBeTruthy();
  });

  it("form should be invalid", async(() => {
    component.form.controls["name"].setValue('');
    component.form.controls["email"].setValue('');
    component.form.controls["password"].setValue('');
    expect(component.form.valid).toBeFalsy();
  }));

  it("form should be invalid for password lenght", async(() => {
    component.form.controls["name"].setValue('user1');
    component.form.controls["email"].setValue('user1@gmail.com');
    component.form.controls["password"].setValue('admin');
    expect(component.form.valid).toBeFalsy();
  }));

  it("form should be valid", async(() => {
    component.form.controls["name"].setValue('user1');
    component.form.controls["email"].setValue('user1@gmail.com');
    component.form.controls["password"].setValue('admin123');
    expect(component.form.valid).toBeTruthy();
  }));

  //spy method
  it("should call the register function", async(() => {
    fixture.detectChanges();
    spyOn(component, 'register');
    let el = fixture.debugElement.query(By.css('.signup-form-sumit')).nativeElement;
    el.click();
    expect(component.register).toHaveBeenCalledTimes(1);
  }));
});
