import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverController: PopoverController,
              private firestore: FirestoreService) {}

  getEstudiantes(){
    this.firestore.getColletion()
  }

}
