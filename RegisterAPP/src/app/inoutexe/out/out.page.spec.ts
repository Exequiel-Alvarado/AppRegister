import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutPage } from './out.page';

describe('OutPage', () => {
  let component: OutPage;
  let fixture: ComponentFixture<OutPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(OutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
