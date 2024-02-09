import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const GraphicalView = ({ data }) => {
  console.log(data);
  console.log();
  const pieData = {
    labels: data.department_performance.map((d) => d.department),
    datasets: [
      {
        label: "Department Satisfaction",
        data: data.department_performance.map((d) => d.satisfaction),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: data.employee_turnover.map((d) => d.date),
    datasets: [
      {
        label: "Turnover Rate",
        data: data.employee_turnover.map((d) => d.turnover_rate),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="shadow-lg p-4 bg-white rounded">
        <h3 className="text-lg font-semibold mb-2">
          Department Satisfaction - Pie Chart
        </h3>
        <Pie data={pieData} />
      </div>
      <div className="shadow-lg p-4 bg-white rounded">
        <h3 className="text-lg font-semibold mb-2">
          Employee Turnover - Bar Chart
        </h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default GraphicalView;
