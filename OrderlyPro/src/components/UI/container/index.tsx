import styles from "./container.module.css";

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <section className={styles.container}>{children}</section>;
};
