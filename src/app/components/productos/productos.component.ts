import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Productos: Producto[] = [];
  Titulo = 'Productos';
  constructor(private productosService: ProductosService) { }
  TituloAccionABMC = {
    I: '(Inicio)',
    A: '(Agregar)',
  };
  AccionABMC = 'I';
  Mensajes = {
    SD: ' No se encontraron registros...',
    RD: ' Revisar los datos ingresados...',
  };
  Categorias = [
    { Id: 'Lacteos', Nombre: 'Lácteos' },
    { Id: 'Carnes', Nombre: 'Carnes' },
    { Id: 'Fideos', Nombre: 'Fideos' },
    { Id: 'Otros', Nombre: 'Otros' },
  ];
  OpcionesActivo = [
    { Id: null, Nombre: '' },
    { Id: true, Nombre: 'SI' },
    { Id: false, Nombre: 'NO' },
  ];
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

  FormBusqueda = new FormGroup({
    Nombre: new FormControl('', [Validators.required])});

  

  ngOnInit() {
    this.GetProductos()
  }

  Agregar() {
    this.AccionABMC = 'A';}

  Volver() {
    this.AccionABMC = 'I';
  }
  Buscar(){
    this.AccionABMC = 'B';
  }
  
  GetProductos(){
    this.productosService.get().subscribe((res: Producto[]) => {
      this.Productos = res;
    });
  }


}
