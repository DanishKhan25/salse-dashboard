import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./chart.module.css";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const SalesChart = () => {
  const [chartType, setChartType] = useState("monthly");

  const monthlyData = {
    series: [
      {
        name: "Sales",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 170, 190],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        show: false,
      },
      title: {
        text: "Overview",
        align: "left",
      },
    },
  };

  const quarterlyData = {
    series: [
      {
        name: "Sales",
        data: [115, 255, 445, 510],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Q1", "Q2", "Q3", "Q4"],
      },
      yaxis: {
        show: false,
      },
      title: {
        text: "Overview",
        align: "left",
      },
    },
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
            Select Chart Type:{" "}
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
      {typeof window !== "undefined" && (
        <Chart
          options={
            chartType === "monthly"
              ? monthlyData.options
              : quarterlyData.options
          }
          series={
            chartType === "monthly" ? monthlyData.series : quarterlyData.series
          }
          type="bar"
          height={250}
        />
      )}
    </div>
  );
};

export default SalesChart;
