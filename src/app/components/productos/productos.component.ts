import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  Titulo = 'Productos';
  Categorias = ["Lácteos", "Fideos", ];
 
  FormRegistro = new FormGroup({
    IdArticulo: new FormControl(0),
    Nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
    Marca: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]), 
    Descripcion: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]), 
    Categoria: new FormControl('', [Validators.required]),
    Imagen: new FormControl('', [Validators.required])

  });

  constructor() { }

  ngOnInit(): void {
  }

}
