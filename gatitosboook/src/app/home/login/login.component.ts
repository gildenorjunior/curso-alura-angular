import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private route: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.route.navigate(['animais']);
      },
      (error) => {
        alert('Usuário o senha inválido!');
        console.log(error.message);
      }
    );
  }
}
