import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListaJuegosComponent } from "./lista-juegos.component";

@NgModule({
    declarations:[ListaJuegosComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class ListaJuegosModule {};