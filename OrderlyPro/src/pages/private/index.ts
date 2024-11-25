import { lazy } from "react"

export const DashboardPages = lazy(() => import('./deshboard'))
export const MenuPages = lazy(() => import('./menu'))
export const OrdersPages = lazy(() => import('./orders'))
export const ProfilePages = lazy(() => import('./profile'))
export const SettingPages = lazy(() => import('./settings'))
export const BillingPages = lazy(() => import('./billings'))
