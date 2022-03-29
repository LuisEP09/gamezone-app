import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juegos } from '../models/juegoszone';
import { Suscripciones } from '../models/suscripciones';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private UrlBase:String='https://3d0a-187-252-201-78.ngrok.io/api/v1/';

  constructor( private http:HttpClient) { }

  getAll():Observable<Juegos[]>{
    return this.http.get<Juegos[]>(this.UrlBase+'juegos')
  }

  getAllSuscripciones():Observable<Suscripciones[]>{
    return this.http.get<Suscripciones[]>(this.UrlBase+'suscripciones')
  }

  agregarjuego(juegoszone:Juegos):Observable<Juegos>{
    return this.http.post<Juegos>(this.UrlBase + "agregar", juegoszone)
  }

  login(user:Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.UrlBase + "login", user)
  }

}
