import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuQRProfPage } from './menu-qrprof.page';

describe('MenuQRProfPage', () => {
  let component: MenuQRProfPage;
  let fixture: ComponentFixture<MenuQRProfPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MenuQRProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
