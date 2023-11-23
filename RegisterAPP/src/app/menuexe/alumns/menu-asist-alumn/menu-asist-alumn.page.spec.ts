import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAsistAlumnPage } from './menu-asist-alumn.page';

describe('MenuAsistAlumnPage', () => {
  let component: MenuAsistAlumnPage;
  let fixture: ComponentFixture<MenuAsistAlumnPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MenuAsistAlumnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
