import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/Layouts";
import {
  BillingPages,
  DashboardPages,
  MenuPages,
  OrdersPages,
  ProfilePages,
  SettingPages,
} from "../pages/private";
import { LoginPage, RegisterPage } from "../pages/public";
import { PrivateRoutes, PublicRoutes } from "./constants";

function Application() {
  return (
    <Suspense fallback={<>Cargando contenido...</>}>
      <BrowserRouter>
        <Routes>
          <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
          <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
          <Route path={PrivateRoutes.MAIN} element={<MainLayout />}>
            <Route index element={<DashboardPages />} />
            <Route path={PrivateRoutes.ORDERS} element={<OrdersPages />} />
            <Route path={PrivateRoutes.MENU} element={<MenuPages />} />
            <Route path={PrivateRoutes.SETTINGS} element={<SettingPages />} />
            <Route path={PrivateRoutes.BILLING} element={<BillingPages />} />
            <Route path={PrivateRoutes.PROFILE} element={<ProfilePages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Application;
