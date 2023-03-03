import { useState } from "react";
import { DataNatParlEU } from "./DataNatParlEU";
import BarChartParl from "./BarChartParl";

export default function BarChartParlApp() {

  const [chartData, setChartData] = useState({
    labels: DataNatParlEU?.map((data) => data.country), 
    datasets: [
      {
        
        label: "Proportion of women (%)",
        data: DataNatParlEU?.map((data) => data.women),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });


  return (
    <div className="App">
      <BarChartParl chartData={chartData} />
    </div>
  );
}