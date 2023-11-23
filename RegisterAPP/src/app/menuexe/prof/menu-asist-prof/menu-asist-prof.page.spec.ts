import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAsistProfPage } from './menu-asist-prof.page';

describe('MenuAsistProfPage', () => {
  let component: MenuAsistProfPage;
  let fixture: ComponentFixture<MenuAsistProfPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MenuAsistProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
