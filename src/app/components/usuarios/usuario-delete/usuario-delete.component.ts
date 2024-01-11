import { Component, OnInit } from '@angular/core';
import { usuario } from './../../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {
  user: usuario = {
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao: ''
  }

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
  delete(): void{
    this.service.delete(this.user.id).subscribe(()=>{
      this.toast.success('Usuário excluído com Sucesso!', 'Exclusão');
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



}
