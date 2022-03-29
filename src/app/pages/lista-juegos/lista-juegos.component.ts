import { Component, OnInit } from '@angular/core';
import { Suscripciones } from 'src/app/models/suscripciones';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  constructor(private suscripcionesJuegos:ServiceService) { }

  suscripciones: Suscripciones[]=[];

  ngOnInit(): void {
    this.suscripcionesJuegos.getAllSuscripciones().subscribe(
      suscripcion => this.suscripciones=suscripcion
    );
  }

}
