import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarifas-create',
  templateUrl: './tarifas-create.component.html',
  styleUrls: ['./tarifas-create.component.css']
})
export class TarifasCreateComponent implements OnInit {

  inicioRota:    FormControl = new FormControl(null, [Validators.required]);
  fimRota:       FormControl = new FormControl(null, [Validators.required]);
  valorTarifa:   FormControl = new FormControl(null, [Validators.required]);
  status:        FormControl = new FormControl(null, [Validators.required]);
  usuario:       FormControl = new FormControl(null, [Validators.required]);
  observacao:    FormControl = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.inicioRota.valid && this.fimRota.valid  && this.valorTarifa.valid && this.status.valid
    && this.usuario.valid && this.observacao.valid
  }

}
