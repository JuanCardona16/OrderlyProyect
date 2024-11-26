import { Address } from "cluster";
import { Base } from ".";

// Restaurante o negocio
export interface Restaurant extends Base {
  name: string; // nombre
  logo: string; // logo
  phone: string; // Telegono
  officeHours: string; // Horario de atencion
  isAvailible: boolean; // Si el restaurante esta abierto o no
  menuId: string;
  address: Address[];
  rating?: number;
  paymentMethods: string[]; // Metodos de pago aceptados
  latitude?: number;
  longitude?: number;
  tags: string[]; // Clasificación del restaurante
  isVerified: boolean; // Estado de verificación
}
