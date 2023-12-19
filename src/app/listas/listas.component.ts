import { Component, OnInit } from '@angular/core';
import {USUARIOS, usuarios} from "../interfaces/usuarios";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  validationUsersList:usuarios[] = USUARIOS;
  constructor() { }

  ngOnInit(): void {
  }

}
