import BoxRow from "@/components/boxes/BoxRow";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <section className={styles.mainPage}>
        <Header />
        <BoxRow />
      </section>
    </main>
  );
}
