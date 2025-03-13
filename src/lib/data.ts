import fs from 'fs';
import path from 'path';
import { Product } from '../types/product';
import { Category } from "../types/GeneralTypes"

// Leer categorías desde categorias.json
export const getCategories = (): Category[] => {
  const filePath = path.join(process.cwd(), 'public', 'categorias', 'categorias.json');
  const categories: Category[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Validar que las imágenes existan
  categories.forEach(category => {
    const imagePath = path.join(process.cwd(), 'public', category.imagen.slice(1));
    if (!fs.existsSync(imagePath)) {
      //throw new Error(`Imagen no encontrada para la categoría "${category.nombre}": ${category.imagen}`);
      
      console.log(`Imagen no encontrada para la categoría "${category.nombre}": ${category.imagen}`);
    }

    // Validar que coincida con un archivo JSON
    const jsonPath = path.join(process.cwd(), 'public', 'data', `${category.nombre}.json`);
    if (!fs.existsSync(jsonPath)) {
      throw new Error(`Archivo JSON no encontrado para la categoría "${category.nombre}": ${category.nombre}.json`);
    }
  });

  return categories;
};

// Obtener datos de una categoría específica
export const getCategoryData = (category: string): Product[] => {
  const filePath = path.join(process.cwd(), 'public', 'data', `${category}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// Obtener todos los productos
export const getAllProducts = (): Product[] => {
  const categories = getCategories().map(cat => cat.nombre);
  return categories.reduce((acc, category) => {
    return [...acc, ...getCategoryData(category)];
  }, [] as Product[]);
};

// Obtener un producto por ID
export const getProductById = (id: string): Product | undefined => {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.id === id);
};