// Base 
export interface Base {
  uuid: string;
  createdAt: string;
  updatedAt: string;
}

// Roles
export enum Rol {
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface Address {
  street: string; // calle
  city: string; // cuidad
  state: string; // estado
  zipCode: string; // Codigo postal
}

// Ingrediente
export interface Ingredient {
  name: string; // Nombre del ingrediente
  price?: number; // Costo adicional (opcional)
  isRemovable: boolean; // Si el ingrediente puede ser eliminado
}

// Detalles del Pago
export interface PaymentDetails extends Base {
  method: PaymentMethod; // Método seleccionado
  cardNumber?: string; // Últimos 4 dígitos de la tarjeta
  transactionId?: string; // ID de la transacción
  paymentDate: string; // Fecha del pago
}

// Estado del pedido
export enum StatusOrder {
  ORDER_PLACED, // Pedido realizado
  PENDING, // PENDIENTE
  PREPARING, // Preparando
  CALCELED, // CANCELADO
  DELAYED, // RETRASADO
  READY_FOR_DELIVERY, // LISTO_PARA_ENTREGA
  DELIVERED // ENTREGADO
}

export enum PaymentStatus {
  PAID, // PAGADO
  PENDING, // PENDIENTE
  CANCELED // CANCELADO
}

// Métodos de Pago
export enum PaymentMethod {
  CASH, // Efectivo
  CREDIT_CARD, // Tarjeta de crédito
  DEBIT_CARD, // Tarjeta de débito
  PAYPAL, // PayPal
  BANK_TRANSFER, // Transferencia bancaria
  APPLE_PAY, // Apple Pay
  GOOGLE_PAY, // Google Pay
  NEQUI // Nequi
}

// Notificacion
export interface Notification extends Base {
  type: string;
  message: string;
  userId: string;
  orderId: string;
  isRead: boolean;
  channel: 'PUSH' | 'EMAIL' | 'APP'; // Canal de notificación
  sentAt: string; // Timestamp de envío
}

enum TypeOffer {
  DISCOUNT,
  BOGO,
  FREE_SHIPPING
}

// Oferta 
export interface Offer extends Base {
  type: TypeOffer;
  name: string;
  description: string;
  applicableProducts: string[];
  discount: string;
  active: boolean;
  startDate: string;
  endDate: string;
  restaurantId: string;
}

// tipos de reportes
enum TypesReports {
  VENTAS,
  PRODUCTO_MAS_VENDIDO,
  PEDIDOS_POR_ESTADO
}

// Reporte
export interface Report extends Base {
  restaurantId: string;
  type: TypesReports;
  startDate: string;
  endDate: string;
  data: GeneralReport | SalesReport | BestSellingProductsReport | BusineesStats;
}

export interface GeneralReport extends Base {
  salesReport: SalesReport;
  BestSellingProductsReport: BestSellingProductsReport;
  busineesStats: BusineesStats;
}

// Reporte por ventas
export interface SalesReport extends Base {
  totalSales: number;
  totalOrders: number;
  salesByDay: [
    {
      date: string;
      total: number;
    }
  ]
}

// Reporte de productos mas vendidos
export interface BestSellingProductsReport extends Base {
  products: [
    {
      name: string;
      quantitySold: number;
      revenueGenerated: number;
    }
  ]
}

// Estado general del negocio
export interface BusineesStats extends Base {
  restauirantId: string;
  totalRevene: number; // Ingresos totales
  totalOrders: number; // Total de pedidos
  businessHealth: 'healthy' | 'moderate' | 'critical'; // Salud del negocio
  employeeCount: number; // Total de empleados
  deliveryAgentCount: number; // Total de repartidores
  totalSales: number; // Total de ventas realizadas
  mostPopularProduct: {
    name: string;
    quantitySold: number;
    revenueGenerated: number;
  }; // Producto más vendido
  topSellingCategory: string; // Categoría de producto más vendida
}