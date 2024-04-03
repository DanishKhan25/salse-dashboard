"use client";
import BoxRow from "@/components/boxes/BoxRow";
import DonutChart from "@/components/chart/DonutChart";
import SalesChart from "@/components/chart/SalesChart";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import SalesTable from "@/components/tables/SalesTable";
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
        <div className={styles.container}>
          <div className={styles.chart1}>
            <SalesChart />
          </div>
          <div className={styles.chart2}>
            <DonutChart />
          </div>
        </div>
        <div className={styles.container}>
          <SalesTable />
        </div>
      </section>
    </main>
  );
}
