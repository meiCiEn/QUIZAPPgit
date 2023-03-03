import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChartParl({ chartData }) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Men and women in national parliaments</h2>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                  max: 100
              }},
            plugins: {
              title: {
                display: false,
                text: "Proportion of women in the national parliaments of EU member states"

              }
            }
          }}
        />
      </div>
    );
  }
export default BarChartParl;