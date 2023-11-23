import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaBaseFirebaseComponent } from './prueba-base-firebase.component';

describe('PruebaBaseFirebaseComponent', () => {
  let component: PruebaBaseFirebaseComponent;
  let fixture: ComponentFixture<PruebaBaseFirebaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaBaseFirebaseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaBaseFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
