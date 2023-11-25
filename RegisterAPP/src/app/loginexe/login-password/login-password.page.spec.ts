import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPasswordPage } from './login-password.page';

describe('LoginPasswordPage', () => {
  let component: LoginPasswordPage;
  let fixture: ComponentFixture<LoginPasswordPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(LoginPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
