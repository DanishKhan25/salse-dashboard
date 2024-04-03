import Chart from "react-apexcharts";

const PieChart = () => {
  const pieChartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "pie",
        height: 350,
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      title: {
        text: "Distribution of Teams",
        align: "center",
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <Chart
        options={pieChartData.options}
        series={pieChartData.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PieChart;
