import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaledarPage } from './caledar.page';

describe('CaledarPage', () => {
  let component: CaledarPage;
  let fixture: ComponentFixture<CaledarPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(CaledarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
