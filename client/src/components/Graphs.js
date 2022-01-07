import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { graphData1 } from "../dummy";
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutGraph = () => {
  return (
    <div style={{ width: "50vw" }}>
      <Doughnut data={graphData1} />
    </div>
  );
};
