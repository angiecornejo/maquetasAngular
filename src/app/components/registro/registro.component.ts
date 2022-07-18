import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {Negocio } from '../../models/negocio';
import {Usuario } from '../../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  EsNegocio = true;
  Submitted = false;
  FormRegistro = new FormGroup({
    NombreUsuario: new FormControl('', [Validators.required,Validators.minLength(4),
      Validators.maxLength(55),]),
    NombrePersona: new FormControl(null, [
      Validators.required,
    
    ]),
    Apellido: new FormControl('', [Validators.required]),
    Mail: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    Password: new FormControl('', [
      Validators.required,
    ]),
    
    ConfirmarPassword: new FormControl('', [Validators.required]),
    NombreNegocio: new FormControl('', [Validators.required,Validators.minLength(4),
      Validators.maxLength(55),]),
    Direccion: new FormControl('', [Validators.required,Validators.minLength(4),
        Validators.maxLength(55),])
    
  });





}
