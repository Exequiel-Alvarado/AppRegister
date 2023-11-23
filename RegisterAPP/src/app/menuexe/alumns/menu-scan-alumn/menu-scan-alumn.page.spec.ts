import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuScanAlumnPage } from './menu-scan-alumn.page';

describe('MenuScanAlumnPage', () => {
  let component: MenuScanAlumnPage;
  let fixture: ComponentFixture<MenuScanAlumnPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MenuScanAlumnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
