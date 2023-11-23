import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAddClassProfPage } from './menu-add-class-prof.page';

describe('MenuAddClassProfPage', () => {
  let component: MenuAddClassProfPage;
  let fixture: ComponentFixture<MenuAddClassProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuAddClassProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
