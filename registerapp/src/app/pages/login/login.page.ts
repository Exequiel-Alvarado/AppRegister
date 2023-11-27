// login.page.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      // Aquí puedes redirigir a la página principal u otra página después de iniciar sesión.
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}
