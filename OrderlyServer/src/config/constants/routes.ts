export const prefixApiUrl = '/api/v1'
export const prefixAuth = '/auth'

export const PrivateRoutes = {
  USER: "/user",
  LOGOUT: "/logout",
  BILLING: "/billing",
  ACCOUNTS: "/accounts",
  TRANSACTIONS: "/transactions",
  PAYMENTS: "/payments",
  ORDERS: "/orders",
  MENU: "/menu",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  NOTIFICATIONS: "/notifications",
}

export const PublicRoutes = {
  LOGIN: `/login`,
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
}

export const CustomerPrivateRoutes = {
  ORDERS: "/orders",
  MENU: "/menu",
  PROFILE: "/profile",
  NOTIFICATIONS: "/notifications",
}