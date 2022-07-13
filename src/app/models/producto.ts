export interface Producto {
    IdProducto:number;
    Nombre: string;
    Marca: string;
    Descripcion: string;
    Categoria: string;
    Imagen: string;
}


export const Productos: Producto[] = [
    { IdProducto: 1, Nombre: 'Leche', Marca: 'La Serenisima', Descripcion: 'Envase de cartón (1 Litro)', Categoria: 'Lácteos', Imagen: 'leche.jpg' },
    { IdProducto: 2, Nombre: 'Gaseosa', Marca: 'CocaCola', Descripcion: 'Envase de vidrio (250ml)', Categoria: 'Otros', Imagen: 'coca.jpg' },
    { IdProducto: 3, Nombre: 'asd', Marca: 'Acme', Descripcion: 'El mejor producto que podés conseguir', Categoria: 'Lácteos', Imagen: 'b.jpg' },
    { IdProducto: 4, Nombre: 'asdfsadf', Marca: 'Acme', Descripcion: 'El mejor producto que podés conseguir', Categoria: 'Lácteos', Imagen: 'a.jpg' },
    { IdProducto: 5, Nombre: 'ddd', Marca: 'Acme', Descripcion: 'El mejor producto que podés conseguir', Categoria: 'Lácteos', Imagen: 'c.jpg' },
    { IdProducto: 6, Nombre: 'aa', Marca: 'Acme', Descripcion: 'El mejor producto que podés conseguir', Categoria: 'Lácteos', Imagen: 'z.jpg' },
    { IdProducto: 7, Nombre: 'bbb', Marca: 'Acme', Descripcion: 'El mejor producto que podés conseguir', Categoria: 'Lácteos', Imagen: 'l.jpg' },
    
];
  