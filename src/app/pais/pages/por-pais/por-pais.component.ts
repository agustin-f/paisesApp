import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = 'Hola mundo'

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino);
  }

}
