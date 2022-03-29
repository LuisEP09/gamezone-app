import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio.component";

@NgModule({
    declarations: [InicioComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class InicioModule {};