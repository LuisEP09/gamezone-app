import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListaNombresComponent } from "./lista-nombres.component";


@NgModule({
    declarations: [ListaNombresComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class ListaNombresModule {};