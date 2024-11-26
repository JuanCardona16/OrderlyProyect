// Base 
interface Base {
  uuid: string;
  createdAt: string;
  updatedAt: string;
}

// Roles
enum Rol {
  "USER",
  "ADMIN"
}

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

interface Address {
  street: string; // calle
  city: string; // cuidad
  state: string; // estado
  zipCode: string; // Codigo postal
}

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

// Ingrediente
interface Ingredient {
  name: string; // Nombre del ingrediente
  price?: number; // Costo adicional (opcional)
  isRemovable: boolean; // Si el ingrediente puede ser eliminado
}

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

// Producto para pedido
export interface OrderProduct extends Product {
  quantity: number;
  excludedIngredients?: string[]; // Ingredientes eliminados
  additionalIngredients?: { 
    ingredient: string; 
    price: number; 
  }[]; // Ingredientes añadidos con su costo
}

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

// Detalles del Pago
interface PaymentDetails extends Base {
  method: PaymentMethod; // Método seleccionado
  cardNumber?: string; // Últimos 4 dígitos de la tarjeta
  transactionId?: string; // ID de la transacción
  paymentDate: string; // Fecha del pago
}

// Estado del pedido
enum StatusOrder {
  ORDER_PLACED, // Pedido realizado
  PENDING, // PENDIENTE
  PREPARING, // Preparando
  CALCELED, // CANCELADO
  DELAYED, // RETRASADO
  READY_FOR_DELIVERY, // LISTO_PARA_ENTREGA
  DELIVERED // ENTREGADO
}

enum PaymentStatus {
  PAID, // PAGADO
  PENDING, // PENDIENTE
  CANCELED // CANCELADO
}

// Métodos de Pago
enum PaymentMethod {
  CASH, // Efectivo
  CREDIT_CARD, // Tarjeta de crédito
  DEBIT_CARD, // Tarjeta de débito
  PAYPAL, // PayPal
  BANK_TRANSFER, // Transferencia bancaria
  APPLE_PAY, // Apple Pay
  GOOGLE_PAY, // Google Pay
  NEQUI // Nequi
}

// Factura de pago
export interface InvoiceTicket extends Base {
  restaurantId: string;
  orderId: string;
  currency: string; // Modena utilizada
  products: OrderProduct[]; // Array de productos incluidos en el pedido
  total: string; // Monto total del pedido (incluyendo impuestos y descuentos)
  date: Date; // Fecha y hora en que se generó el ticket
  paymentMethod: PaymentMethod; // Método de pago utilizado (e.g., tarjeta de crédito, efectivo)
  paymentStatus: PaymentStatus  ; // Estado del pago (pendiente, pagado, fallido)
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

// Menu 
export interface Menu extends Base {
  restaurantId: string;
  products: Product[]
  categories: string[];
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