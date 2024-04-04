"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

import { Chart as ChartJS } from "chart.js/auto";

import {
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

const SalesChart = () => {
  const [chartType, setChartType] = useState("monthly");
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const quarterlyData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Quarterly Data",
        data: [100, 150, 200, 250], // Sample quarterly data
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        display: false,
      },

      x: {
        title: {
          display: true,
          text: "Sales Data",
          font: {
            size: 20,
          },
          position: "top",
        },
      },
    },
  };
  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Overview",
        data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 0,
      },
    ],
  };
  const handleChange = (e) => {
    setChartType(e.target.value);
  };

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.dropdown}>
        <div className={styles.chartType}>
          {chartType === "monthly" ? "Monthly" : "Quarterly"}
        </div>
        <div>
          <label htmlFor="chartType" className={styles.label}>
            Select Chart Type:
          </label>
          <select
            id="chartType"
            value={chartType}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
      </div>

      <Bar
        data={chartType === "monthly" ? chartData : quarterlyData}
        options={options}
        height={100}
      />
    </div>
  );
};

export default SalesChart;
