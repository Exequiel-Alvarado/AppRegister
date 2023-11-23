import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuardPage } from './guard.page';

describe('GuardPage', () => {
  let component: GuardPage;
  let fixture: ComponentFixture<GuardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
