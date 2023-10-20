import{ HttpClient }from '@angular/common/http';
import{ Injectable }from '@angular/core';
import{ Observable }from 'rxjs';

@Injectable({providedIn:'root'})
export class apiService{
    constructor(private http:HttpClient){}
    urlapi="http://localhost:3000/"
    obtener():Observable<any>{return this.http.get(this.urlapi+"alumnos").pipe()}
}