import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: [
      "10/10/2024",
      "11/10/2024",
      "12/10/2024",
      "13/10/2024",
      "14/10/2024",
      "15/10/2024",
      "16/10/2024",
      "17/10/2024",
      "18/10/2024",
      "19/10/2024",
    ],
    datasets: [
      {
        label: "Sales",
        // data: [0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16],
        data: [0.16, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: true, // fill under the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This ensures it stretches to fill the container
    scales: {
      x: {
        title: {
          display: true,
          text: "PHI price ($)",
          font: {
            size: 16,
          },
          padding: {
            top: 20,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USDT)",
          font: {
            size: 16,
          },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full px-4 mt-6 mb-36">
      <div className="border-2 border-buttonColor px-2 py-1 rounded-xl">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
