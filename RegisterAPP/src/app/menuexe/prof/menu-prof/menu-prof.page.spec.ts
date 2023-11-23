import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuProfPage } from './menu-prof.page';

describe('MenuProfPage', () => {
  let component: MenuProfPage;
  let fixture: ComponentFixture<MenuProfPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MenuProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
