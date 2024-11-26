import { Base, PaymentMethod, PaymentStatus } from ".";
import { OrderProduct } from "./Order.model";

// Factura de pago
export interface InvoiceTicket extends Base {
  restaurantId: string;
  orderId: string;
  currency: string; // Modena utilizada
  products: OrderProduct[]; // Array de productos incluidos en el pedido
  total: string; // Monto total del pedido (incluyendo impuestos y descuentos)
  date: Date; // Fecha y hora en que se generó el ticket
  paymentMethod: PaymentMethod; // Método de pago utilizado (e.g., tarjeta de crédito, efectivo)
  paymentStatus: PaymentStatus; // Estado del pago (pendiente, pagado, fallido)
  transactionId: string; // Identificador único de la transacción
  taxAmount: number; // Monto total de impuestos aplicados
  taxBreakdown: TaxBreakdown[]; // Detalle de los impuestos aplicados (tipo, tasa, monto)
  discountAmount: number; // Monto total de descuentos aplicados
  discountBreakdown: DiscountBreakdown[]; // Detalle de los descuentos aplicados (tipo, monto)
  shippingCost: number; // Costo del envío
  shippingAddress: string; // Dirección de envío
  customerName: string; // Nombre del cliente
  customerPhone: string; // Numero de contacto del cliente
  customerEmail: string; // Correo electrónico del cliente
  restaurantName: string; // Nombre del restaurante
  restaurantAddress: string; // Dirección del restaurante
}

interface TaxBreakdown {
  taxType: string; // Tipo de impuesto (e.g., IVA, impuesto sobre las ventas)
  taxRate: number; // Tasa del impuesto
  taxAmount: number; // Monto del impuesto
}

interface DiscountBreakdown {
  discountType: string; // Tipo de descuento (e.g., descuento por volumen, código promocional)
  discountAmount: number; // Monto del descuento
}