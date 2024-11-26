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
  ADMIN_LOGIN: `/admin/login`,
  ADMIN_REGISTER: '/admin/register',
  ADMIN_FORGOT_PASSWORD: '/admin/forgot-password',
  ADMIN_RESET_PASSWORD: '/admin/reset-password',
}

export const CustomerPrivateRoutes = {
  ORDERS: "/orders",
  MENU: "/menu",
  PROFILE: "/profile",
  NOTIFICATIONS: "/notifications",
}