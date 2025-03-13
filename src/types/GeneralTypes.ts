export type GeneralTypes = {
    href: string;
}
export interface Category {
    nombre: string;
    imagen: string; // Nueva propiedad para la imagen de la categoría
}
export interface CategorySliderProps {
  categories: Category[];
}