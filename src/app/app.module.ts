import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

//Componentes do Projeto!
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptor/auth.interceptor';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { UsuarioUpdateComponent } from './components/usuarios/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuarios/usuario-delete/usuario-delete.component';
import { TarifaListComponent } from './components/tarifas/tarifa-list/tarifa-list.component';
import { TarifasCreateComponent } from './components/tarifas/tarifas-create/tarifas-create.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { InjectionToken } from '@angular/core';
import { TarifasUpdateComponent } from './components/tarifas/tarifas-update/tarifas-update.component';





@NgModule({
  declarations: [
    AppComponent,   
    NavComponent, 
    HomeComponent, UsuarioListComponent, LoginComponent, UsuarioCreateComponent, UsuarioUpdateComponent, UsuarioDeleteComponent, TarifaListComponent, TarifasCreateComponent, TarifasUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
  
    NgxMaskModule.forRoot(),
    
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })  
    
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: {} },
    JwtHelperService,,AuthInterceptorProvider],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
