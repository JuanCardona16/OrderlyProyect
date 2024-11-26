import { Base, Rol } from "../..";

// Administrador 
export interface Admin extends Base {
  name: string;
  email: string;
  phone: string;
  password: string;
  restaurantId: string;
  rol: Rol.ADMIN;
  isVerified: boolean; // Estado de verificación
}
