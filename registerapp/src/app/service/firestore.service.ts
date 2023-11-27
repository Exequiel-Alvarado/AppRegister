import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener datos de una colección
  getClases(): Observable<any[]> {
    return this.firestore.collection('clases').valueChanges();
  }

  // Guardar datos en una colección
  agregarClase(clase: any): Promise<DocumentReference> {
    try {
      const result = this.firestore.collection('clases').add(clase);
      return result as Promise<DocumentReference>;
    } catch (error) {
      console.error('Error al agregar clase:', error);
      throw error;
    }
  }
}
