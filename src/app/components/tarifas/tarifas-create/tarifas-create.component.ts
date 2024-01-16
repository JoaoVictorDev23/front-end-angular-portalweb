import { AuthService } from 'src/app/services/auth.service';
import { usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tarifas } from 'src/app/models/tarifas';
import { TarifasService } from 'src/app/services/tarifas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tarifas-create',
  templateUrl: './tarifas-create.component.html',
  styleUrls: ['./tarifas-create.component.css']
})
export class TarifasCreateComponent implements OnInit {
   userEmail: string = '';

  tarifaModel: tarifas ={
    status:"0",      
    observacao:"",      
    inicioRota:"",     
    fimRota:"",     
    valorTarifa:null,    
    usuario:"0"     
    
    }    
  
  
  usuarios: usuario[] = []

  inicioRota:    FormControl = new FormControl(null, [Validators.required]);
  fimRota:       FormControl = new FormControl(null, [Validators.required]);
  valorTarifa:   FormControl = new FormControl(null, [Validators.required]);
  status:        FormControl = new FormControl(null, [Validators.required]);
  usuario:       FormControl = new FormControl(null, [Validators.required]);
  observacao:    FormControl = new FormControl(null, [Validators.required]);

  constructor(
              private tarifaService: TarifasService,
              private toastService: ToastrService,
              private router: Router,
              private authService: AuthService

              ) { }

  ngOnInit(): void {
     // Obter o ID do usuário logado ao inicializar o componente
     this.userEmail = this.authService.getUsuarioLogado();
     console.log('Email do Usuário Logado:', this.userEmail);
   }
  create(): void {
    this.tarifaService.create(this.tarifaModel).subscribe(resposta =>
      {
        this.toastService.success('Tarifa criada com sucesso!','Nova Tarifa!');
        this.router.navigate(['tarifas'])
      }, ex =>{
        this.toastService.error(ex.error.error);
      })
  }



  validaCampos(): boolean {
    return this.inicioRota.valid && this.fimRota.valid  && this.valorTarifa.valid && this.status.valid
    && this.usuario.valid && this.observacao.valid
  }

}
