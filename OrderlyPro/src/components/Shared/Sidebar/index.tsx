import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../../config/constants";
import styles from "./sidebar.module.css";
import { ChartLine, Package, UtensilsCrossedIcon, FileChartLine, Settings, LogOutIcon } from 'lucide-react'

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>OrderlyPro</h2>
        <nav>
          <ul>
            <li>
              <Link to={PrivateRoutes.MAIN}>
                <ChartLine />
                <span>Estadisticas</span>
              </Link>
            </li>
            <li>
              <Link to={PrivateRoutes.ORDERS}>
                <Package />
                <span>Pedidos</span>
              </Link>
            </li>
            <li>
              <Link to={PrivateRoutes.MENU}>
                <UtensilsCrossedIcon />
                <span>Menu</span>
              </Link>
            </li>
            <li>
              <Link to={PrivateRoutes.BILLING}>
                <FileChartLine />
                <span>Reportes</span>
              </Link>
            </li>
            <li>
              <Link to={PrivateRoutes.SETTINGS}>
                <Settings />
                <span>Configuración</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <button type="button" className={styles.btnLogout}>
          <LogOutIcon />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};
