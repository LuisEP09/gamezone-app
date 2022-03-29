import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AgregarJuegoModule } from "./agregar-juego/agregar-juego.module";
import { InicioModule } from "./inicio/inicio.module";
import { ListaJuegosModule } from "./lista-juegos/lista-juegos.module";
import { ListaNombresModule } from "./lista-nombres/lista-nombres.module";
import { LoginModule } from "./login/login.module";

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
        InicioModule,
        LoginModule,
        AgregarJuegoModule,
        ListaJuegosModule,
        ListaNombresModule,
    ]
})

export class PagesModule {};