import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/models/juegoszone';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista-nombres',
  templateUrl: './lista-nombres.component.html',
  styleUrls: ['./lista-nombres.component.css']
})
export class ListaNombresComponent implements OnInit {

  constructor(private juegosService:ServiceService) { }

  juegos: Juegos[]=[];

  ngOnInit(): void {
    this.juegosService.getAll().subscribe(
      juego => this.juegos=juego
    );
  }

}
