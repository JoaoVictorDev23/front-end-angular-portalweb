import { usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  user: usuario = {
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao: ''
  }


  nome:FormControl = new FormControl(null, Validators.minLength(3));
  cpf:FormControl = new FormControl(null, Validators.required);
  email:FormControl = new FormControl(null, Validators.email);
  senha:FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: UsuarioService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  
  findById(): void{
    this.service.findById(this.user.id).subscribe(resposta =>{
      resposta.perfis = []
      this.user = resposta;
    

    })

  }
  update(): void{
    this.service.update(this.user).subscribe(()=>{
      this.toast.success('Usuário atualizado com Sucesso!', 'Atualização');
      this.router.navigate(['usuarios'])
      
    }, ex => {
      console.log(ex);
      if(ex.error.errors){
        ex.error.errors.forEach(element=>{
          this.toast.error(element.message);
        });
      }else{
        if(ex.error.message == "Forbidden"){
          this.toast.error("Você não tem permissão para atualizar usuários!");
        }else{        
          this.toast.error(ex.error.message);
        }
        
      }
     })
    }

    addPerfil(perfil: any): void{


      if(this.user.perfis.includes(perfil))
      {
        this.user.perfis.splice(this.user.perfis.indexOf(perfil), 1);

      }else{
        this.user.perfis.push(perfil);

      }
      
    }
    
  validaCampos(): boolean{
        return this.nome.valid && this.cpf.valid 
        && this.email.valid && this.senha.valid
      }
    
    

}
