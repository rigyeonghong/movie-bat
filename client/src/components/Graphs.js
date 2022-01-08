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
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { graphData1, graphData2 } from "../dummy";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
export const LineGraph1 = () => {
  return (
    <div style={{ width: "30vw" }}>
      <Line data={graphData2} />
    </div>
  );
};
