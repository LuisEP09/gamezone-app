import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuarios = new Usuarios();

  constructor(private userService: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(result => {
      console.log(result)
    },
      error => {
        console.error(error);
        this.router.navigate([''])
      },
      () => {
        this.router.navigate(['lista'])
      })
  }
}


