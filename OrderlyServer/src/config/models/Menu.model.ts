import { Base } from ".";
import { Product } from "./Product.model";

// Menu 
export interface Menu extends Base {
  restaurantId: string;
  products: Product[]
  categories: string[];
}