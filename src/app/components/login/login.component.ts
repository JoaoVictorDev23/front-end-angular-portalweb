import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: credenciais = {
    email: '',
    senha: ''
  }
  email =new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }
    else{
      return false;
    }
  }

}
