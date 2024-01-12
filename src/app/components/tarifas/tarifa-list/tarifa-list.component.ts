import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tarifas } from 'src/app/models/tarifas';
import { usuario } from 'src/app/models/usuario';
import { TarifasService } from 'src/app/services/tarifas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tarifa-list',
  templateUrl: './tarifa-list.component.html',
  styleUrls: ['./tarifa-list.component.css']
})
export class TarifaListComponent implements OnInit {
  ELEMENT_DATA: tarifas[] = [] 
  FILTER_DATA: tarifas []= []

  displayedColumns: string[] = ['id', 'dataAbertura', 'dataFechamento', 'status','observacao'
  , 'inicioRota','fimRota', 'valorTarifa','usuario','nomeUsuario','acoes'];
  dataSource = new MatTableDataSource<tarifas>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: TarifasService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<tarifas>(resposta);
      this.dataSource.paginator=this.paginator;

    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: any): string {
    if(status=='0'){
      return 'ABERTO'
    }else if(status=='1'){
      return 'PROCESSANDO'
    }
    else{
      return 'ENCERRADA'
    }
  }

  orderByStatus(status: any): void{
    let list: tarifas[] = []
    this.ELEMENT_DATA.forEach(element => {
      if(element.status == status)
         list.push(element)
    });
    this.FILTER_DATA = list;
    this.dataSource = new MatTableDataSource<tarifas>(list);
    this.dataSource.paginator=this.paginator;
  }


}

