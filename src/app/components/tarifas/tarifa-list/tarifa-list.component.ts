import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tarifas } from 'src/app/models/tarifas';
import { usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tarifa-list',
  templateUrl: './tarifa-list.component.html',
  styleUrls: ['./tarifa-list.component.css']
})
export class TarifaListComponent implements OnInit {
  ELEMENT_DATA: tarifas[] = [
    {
        id: 1,
        dataAbertura  : "12/01/2024",
        dataFechamento: null,
        status:"PROCESSANDO",
        observacao: "Teste",
        inicioRota: "Goiania",
        fimRota: "Sao Paulo",
        valorTarifa: 110.5,
        usuario: 1,
        nomeUsuario: "Rikally"
    }
  ] 

  displayedColumns: string[] = ['id', 'dataAbertura', 'dataFechamento', 'status','observacao'
  , 'inicioRota','fimRota', 'valorTarifa','usuario','nomeUsuario','acoes'];
  dataSource = new MatTableDataSource<tarifas>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(

  ) { }

  ngOnInit(): void {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

