import Chart from "react-apexcharts";

const DonutChart = ({ newCustomers }) => {
  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["", ""],
    legend: {
      show: false,
    },
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
      <Chart options={options} series={series} type="donut" height={250} />
    </div>
  );
};

export default DonutChart;