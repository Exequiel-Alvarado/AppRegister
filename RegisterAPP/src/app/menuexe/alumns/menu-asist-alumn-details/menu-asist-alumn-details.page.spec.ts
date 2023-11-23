import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAsistAlumnDetailsPage } from './menu-asist-alumn-details.page';

describe('MenuAsistAlumnDetailsPage', () => {
  let component: MenuAsistAlumnDetailsPage;
  let fixture: ComponentFixture<MenuAsistAlumnDetailsPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MenuAsistAlumnDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
