"use client";

import { Doughnut } from "react-chartjs-2";
import styles from "./chart.module.css";
const DonutChart = ({ newCustomers }) => {
  const data = {
    labels: ["Sales", "New Customers"],
    datasets: [
      {
        label: "Sales vs New Customers",
        data: [7000, 3000], // Sample data representing sales and new customers
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red for sales
          "rgba(54, 162, 235, 0.6)", // Blue for new customers
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    legend: {
      position: "right",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    cutoutPercentage: 50,
  };

  return (
    <div
      style={{
        background: "white",
        padding: "10px",
        borderRadius: "10px",
        height: "100%",
      }}
    >
      <h3 style={{ textAlign: "center" }}>New Customers</h3>
      <Doughnut data={data} options={options} className={styles.chart} />
    </div>
  );
};

export default DonutChart;
