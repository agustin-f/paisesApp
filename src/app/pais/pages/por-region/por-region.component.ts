import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string = '';
  paises:Country[] = [];

  constructor( private PaisService:PaisService) { }


  activarRegion(region:string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises = [];

    this.PaisService.buscarRegion(region)
      .subscribe( paises => this.paises = paises);
  }

  ngOnInit(): void {
  }

}
