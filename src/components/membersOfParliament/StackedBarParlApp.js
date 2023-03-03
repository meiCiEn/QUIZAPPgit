import { useState } from "react";
import { DataNatParlEU } from "./DataNatParlEU";
import StackedBarParl from "./StackedBarParl";
// refs are a way of accessing elements in the DOM, like getElementById in vanilla JS. 
// To access a DOM node managed by React, first, import the useRef Hook:
import { useRef } from 'react';



// To sort an array of objects in JavaScript, use the sort() method with a compare function. A compare function helps us to write our logic in the sorting of the array of objects. They allow us to sort arrays of objects by strings, integers, dates, or any other custom property.

// MORE INFO : https://www.scaler.com/topics/javascript-sort-an-array-of-objects/

// Example to demonstrate Sorting an array of objects by numbers
// let students = [
//   {
//     "name": "Isabella Williams",
//     "roll": 38,
//   },
//   {
//     "name": "Sophia Heels",
//     "roll": 45,
//   },
//   {
//     "name": "Ava Benjamin",
//     "roll": 17,
//   },
//   {
//     "name": "Amelia Brown",
//     "roll": 8,
//   },
// ]
// let sortedRolls = students.sort((r1, r2) => (r1.roll > r2.roll) ? 1 : (r1.roll < r2.roll) ? -1 : 0);

// console.log("Students sorted based on ascending order of their roll numbers are:")

// console.log(sortedRolls);

export default function StackedBarParlApp() {
  // Use the useRef hook to declare a ref inside your component:
  const chartRef = useRef(null);

  let sortedData = DataNatParlEU.sort((n1, n2) => (n1.women < n2.women) ? 1 : (n1.women > n2.women) ? -1 : 0);
  console.log(sortedData);


  const [chartData, setChartData] = useState({
    labels: DataNatParlEU?.map((data) => data.country), 

    datasets: [
      {
        
        label: 'Women (% of total members)',
        data: DataNatParlEU?.map((data) => data.women),
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: "black",
        borderWidth: 2
      },

      {
        label: 'Men (% of total members)',
        data: DataNatParlEU?.map((data) => data.men),
        backgroundColor: 'rgb(75, 192, 192)',
        
        borderColor: "black",
        borderWidth: 2
      },
    ]


  });

  return (
    <div className="StackedBarParl">
      <StackedBarParl chartData={chartData} />
    </div>
  );
}
  
