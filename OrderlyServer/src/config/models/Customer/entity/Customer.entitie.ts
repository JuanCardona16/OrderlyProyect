import { Base, Address, Rol, PaymentMethod, Notification } from '../..'

// Cliente
export interface Customer extends Base {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: Address[];
  photo: string;
  restaurantsFavorites: string[];
  rol: Rol.USER;
  orders: string[]; // Array de pedidos realizados por el usuario
  notifications: string[]; // Notificaciones
  wishlist?: string[]; // Lista de productos que le interesan
  preferredPaymentMethod?: PaymentMethod[]; // Método de pago favorito
  isVerified?: boolean; // Estado de verificación
}

export type CustomerDto = Omit<Customer, 'uuid'>
export type updateCustomerDto = Partial<Customer>