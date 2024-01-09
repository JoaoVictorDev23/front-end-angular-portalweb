import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';


const routes: Routes = [
  {
    //Rota rota vazia para nav component
    path:'', component:NavComponent, children:[
      {path: '', component: HomeComponent},
      {path: 'usuarios', component: UsuarioListComponent}
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
