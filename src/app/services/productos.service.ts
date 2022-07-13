import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Productos } from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }
  get() {
    return of(Productos);
  }
}
