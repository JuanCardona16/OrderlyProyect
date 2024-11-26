import { Base, Address, Rol, PaymentMethod } from '../..'
import { Order } from '../../Order.model';

// Cliente
export interface Customer extends Base {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: Address[];
  photo: string;
  restaurantsFavorites: string[];
  productsFavorites: string[];
  rol: Rol.USER;
  orders: Order[]; // Array de pedidos realizados por el usuario
  notifications: Notification[]; // Notificaciones
  wishlist?: string[]; // Lista de productos que le interesan
  preferredPaymentMethod?: PaymentMethod; // Método de pago favorito
  isVerified: boolean; // Estado de verificación
}