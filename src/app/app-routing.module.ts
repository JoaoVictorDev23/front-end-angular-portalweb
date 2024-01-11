import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuarios/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuarios/usuario-delete/usuario-delete.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    //Rota rota vazia para nav component
    path:'', component:NavComponent, 
    canActivate:[AuthGuard] , 
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'usuarios', component: UsuarioListComponent},
      {path: 'usuarios/create', component: UsuarioCreateComponent},
      {path: 'usuarios/update/:id', component: UsuarioUpdateComponent},
      {path: 'usuarios/delete/:id', component: UsuarioDeleteComponent}

 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
