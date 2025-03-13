export interface Product {
    id: string;
    nombre: string;
    categoria: string;
    norma: string;
    enlaceNorma: string;
    precio: number;
    proveedor: string;
    codigo: string;
    descripcion: string;
    imagen: string;
    destacado?: boolean; // Para controlar imágenes del carrusel
  }