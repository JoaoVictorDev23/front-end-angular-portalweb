import { AuthService } from 'src/app/services/auth.service';
import { usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tarifas } from 'src/app/models/tarifas';
import { TarifasService } from 'src/app/services/tarifas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tarifas-update',
  templateUrl: './tarifas-update.component.html',
  styleUrls: ['./tarifas-update.component.css']
})
export class TarifasUpdateComponent implements OnInit {
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
  valorTarifa:   FormControl = new FormControl(null, [Validators.required,  Validators.pattern(/^\d+(\.\d+)?$/)]);
  status:        FormControl = new FormControl(null, [Validators.required]);
  usuario:       FormControl = new FormControl(null, [Validators.required]);
  observacao:    FormControl = new FormControl(null, [Validators.required]);

  constructor(
              private tarifaService: TarifasService,
              private toastService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private usuarioService: UsuarioService

              ) { }

  ngOnInit(): void {

 const idParam = this.route.snapshot.paramMap.get('id');
  this.tarifaModel.id = idParam ? parseInt(idParam, 10) : 0; // 10 é a base numérica


    this.findById();
     this.userEmail = this.authService.getUsuarioLogado();
   }
   findById():void {
    this.tarifaService.findById(this.tarifaModel.id).subscribe(
      resposta => {
        this.tarifaModel = resposta;
      }, ex => {
        this.toastService.error(ex.error.error);
      }
    )
   }
  update(): void {
     // Certifique-se de que os campos obrigatórios estão preenchidos
     if (
      this.inicioRota.valid &&
      this.fimRota.valid &&
      this.valorTarifa.valid &&
      this.status.valid &&
      this.usuario.valid &&
      this.observacao.valid
    ) {
      // Chama o serviço para buscar o ID do usuário pelo email
      this.usuarioService.findbyemail(this.userEmail).subscribe(
        idUsuario => {
          // Agora temos o ID do usuário, podemos configurar o campo 'usuario' do objeto tarifaModel
          this.tarifaModel.usuario = idUsuario.toString();

          // Chama o serviço para criar a tarifa
          this.tarifaService.update(this.tarifaModel).subscribe(
            resposta => {
              this.toastService.success('Tarifa atualizada com sucesso!', 'Atualizar Tarifa!');
              this.router.navigate(['tarifas']);
            },
            ex => {
              this.toastService.error(ex.error.error);
            }
          );
        },
        error => {
          console.error('Erro ao buscar ID do usuário por email', error);
          // Lógica de tratamento de erro, se necessário
        }
      );
    } else {
      // Lógica de tratamento caso os campos obrigatórios não estejam preenchidos
      this.toastService.error('Preencha todos os campos obrigatórios.');
    }
  }
  



  validaCampos(): boolean {
    return this.inicioRota.valid && this.fimRota.valid  && this.valorTarifa.valid && this.status.valid
    && this.usuario.valid && this.observacao.valid
  }
  
  retornaStatus(status: any): string {
    if(status == '0') {
      return 'ABERTO'
    } else if(status == '1') {
      return 'EM ANDAMENTO'
    } else {
      return 'ENCERRADO'
    }
  }

}
