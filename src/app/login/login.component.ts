import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {usuarios, USUARIOS} from "../interfaces/usuarios";
import { encrypt} from "../util/util-encrypt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  validationUsersList:usuarios[] = USUARIOS;
  constructor(private router: Router) {
  }


  onSubmit(usuarioRequest: string){
    console.log("Usuario a buscar", usuarioRequest);
    console.log("filtrado", this.validationUsersList.filter(item => item.usuarios == usuarioRequest));
    // @ts-ignore
    let usuarioOpt = this.validationUsersList.filter(
      item => item.usuarios == usuarioRequest);
    console.log(encrypt(this.password))
    // @ts-ignore
    if(usuarioOpt.length>0 && (usuarioOpt.at(0).password) === encrypt(this.password)) {  //aseguramos de que existan datos para poder buscar supassword
      this.router.navigate(['/register']);
    } else {
      console.log("error")
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
    //contraseña


  }
}
