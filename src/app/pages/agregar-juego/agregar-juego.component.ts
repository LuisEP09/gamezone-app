import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juegos } from 'src/app/models/juegoszone';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.component.html',
  styleUrls: ['./agregar-juego.component.css']
})
export class AgregarJuegoComponent implements OnInit {

  juego: Juegos = new Juegos();

  constructor(private agregarSercive: ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(): void{
    this.agregarSercive.agregarjuego(this.juego).subscribe(
      response => this.router.navigate(['nombres'])
    )
  }

}
