import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //add
  createDoc(){
    this.firestore.collection('Estudiantes')
  }

  //ver
  getColletion(){
    console.log('estoy por leer una colecion');
    this.firestore.collection('Estudiantes').valueChanges().subscribe( (respuesta) => {

      console.log('respuesta ->',respuesta);

    });
  }
}
