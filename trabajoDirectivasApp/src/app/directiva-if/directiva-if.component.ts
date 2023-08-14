import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-if',
  templateUrl: './directiva-if.component.html',
  styleUrls: ['./directiva-if.component.css']
})
export class DirectivaIfComponent {
  titulo='Directiva';
  nombre="";
  apellido="";

  registrado = false;
  entradas:any=[];

  constructor(){
    this.entradas=[
      { titulo:"Java"},
      { titulo:"JavaScript"},
      { titulo:"Python"},
      { titulo:"Pascal"}

    ]
  }
  texto="Usuario registrado";
  registrar(){
    this.registrado=true;
  }
}
