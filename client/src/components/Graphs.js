import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { graphData1, graphData2, graphData3, graphData4 } from "../dummy";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const DoughnutGraph = () => {
  return (
    <div style={{ width: "50vw" }}>
      <Doughnut data={graphData1} />
    </div>
  );
};

export const BarGraph1 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "영화관 이용실태 조사",
        color: "white",
      },
    },
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: "#FFFFFF",
        },
        ticks: {
          beginAtZero: true,
          fontColor: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div style={{ width: "40vw" }}>
      <Bar data={graphData2} options={options} />
    </div>
  );
};

export const BarGraph2 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "코로나 OTT 이용 조사",
        color: "white",
      },
    },
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: "#FFFFFF",
        },
        ticks: {
          beginAtZero: true,
          fontColor: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div style={{ width: "40vw" }}>
      <Bar data={graphData3} options={options} />
    </div>
  );
};
export const BarGraph3 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ss",
      },
    },
  };

  return (
    <div style={{ width: "40vw" }}>
      <Bar data={graphData4} options={options} />
    </div>
  );
};
