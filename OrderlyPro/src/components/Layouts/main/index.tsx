import { Outlet } from "react-router-dom";
import styles from "./main.module.css";
import { Sidebar } from "../../Shared";
import { Header } from "../../UI";

export const MainLayout = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.sidebar}>
          <Sidebar />
        </section>
        <section className={styles.content}>
          <section className={styles.contentHeader}>
            <Header />
          </section>
          <section className={styles.contentOutlet}>
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};
