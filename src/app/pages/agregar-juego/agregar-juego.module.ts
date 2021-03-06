import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AgregarJuegoComponent } from "./agregar-juego.component";

@NgModule({
    declarations: [AgregarJuegoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})

export class AgregarJuegoModule {};