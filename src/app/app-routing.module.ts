import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarJuegoComponent } from './pages/agregar-juego/agregar-juego.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaJuegosComponent } from './pages/lista-juegos/lista-juegos.component';
import { ListaNombresComponent } from './pages/lista-nombres/lista-nombres.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "agregar",
    component: AgregarJuegoComponent
  },
  {
    path: "lista",
    component: ListaJuegosComponent
  },
  {
    path: "nombres",
    component: ListaNombresComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
