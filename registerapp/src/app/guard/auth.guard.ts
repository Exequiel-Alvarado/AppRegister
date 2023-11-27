// auth.guard.ts
import { Injectable } from '@angular/core';
// Importación correcta para CanActivate
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';  // Agrega esta línea
import { AuthService } from '../service/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable <boolean>{
    return this.authService.user$.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
