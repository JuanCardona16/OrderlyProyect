import { Base, Ingredient } from ".";

// Producto
export interface Product extends Base {
  name: string;
  description: string;
  price: number;
  photo: string;
  isAvailible: boolean;
  categoryId: string;
  size: string;
  customization: {
    options: string[];
  }
  isFeatured?: boolean; // Producto destacado
  ingredients: Ingredient[]; // Lista de ingredientes disponibles
}

