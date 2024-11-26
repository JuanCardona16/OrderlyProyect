import { Base, PaymentDetails, StatusOrder } from ".";
import { Product } from "./Product.model";

// Pedido
export interface Order extends Base {
  restaurantId: string;
  customerId: string;
  status: StatusOrder;
  deliveryAddress: string;
  total: string;
  products: OrderProduct[];
  estimatedDelivery: string;
  paymentDetails: PaymentDetails;
}

// Producto para pedido
export interface OrderProduct extends Product {
  quantity: number;
  excludedIngredients?: string[]; // Ingredientes eliminados
  additionalIngredients?: { 
    ingredient: string; 
    price: number; 
  }[]; // Ingredientes añadidos con su costo
}