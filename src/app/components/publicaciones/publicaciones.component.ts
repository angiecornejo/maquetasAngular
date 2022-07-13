import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  Titulo = 'Productos';

  Categorias = ["Lácteos", "Fideos", ];
  Respuestas = ['Si', 'No'];
  FormRegistro = new FormGroup({
    Producto: new FormControl('', [Validators.required]),
    Precio: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{1,7}'),
    ]),
    Cantidad: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{1,7}'),
    ]),
    FechaVencimiento: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}'
      ),
    ]),
    FechaVencimientoBis: new FormControl('', [Validators.required]),
    FormaDePago: new FormControl('', [Validators.required]),
    Reservable: new FormControl('', [Validators.required]),

  });



  constructor() { }

  ngOnInit(): void {
  }

}
