import React from 'react';
import { Bar } from 'react-chartjs-2';
import dataMen from './menNatParl_EU.json';
import dataWomen from './womenNatParl_EU.json';
import dataNatParlEU from './DataNatParlEU';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StackedBarParl({ chartData }) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Men and women in national parliaments</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
                title: {
                  display: true,
                  text: '',
                },
              },
              responsive: true,
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                  max: 100
                },
              },
          }}
        />
      </div>
    );
  }

export default StackedBarParl;

//   const dataNatParlEU =
// [
//   {
//     id: 'AT',
//     countryCode: 'AT',
//     country: 'Austria',
//     women: 41.4,
//     men: 58.6,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'BE',
//     countryCode: 'BE',
//     country: 'Belgium',
//     women: 43.8,
//     men: 56.2,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'BG',
//     countryCode: 'BG',
//     country: 'Bulgaria',
//     women: 23.8,
//     men: 76.3,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'CY',
//     countryCode: 'CY',
//     country: 'Cyprus',
//     women: 14.3,
//     men: 85.7,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'CZ',
//     countryCode: 'CZ',
//     country: 'Czechia',
//     women: 23,
//     men: 77,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'DE',
//     countryCode: 'DE',
//     country: 'Germany',
//     women: 35.1,
//     men: 64.9,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'DK',
//     countryCode: 'DK',
//     country: 'Denmark',
//     women: 42.5,
//     men: 57.5,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'EE',
//     countryCode: 'EE',
//     country: 'Estonia',
//     women: 27.7,
//     men: 72.3,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'EL',
//     countryCode: 'EL',
//     country: 'Greece',
//     women: 19,
//     men: 81,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'ES',
//     countryCode: 'ES',
//     country: 'Spain',
//     women: 41,
//     men: 59,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'EU27_2020',
//     countryCode: 'EU27_2020',
//     country: 'European Union - 27 countries (from 2020)',
//     women: 32.5,
//     men: 67.5,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'FI',
//     countryCode: 'FI',
//     country: 'Finland',
//     women: 45.5,
//     men: 54.5,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'FR',
//     countryCode: 'FR',
//     country: 'France',
//     women: 36.6,
//     men: 63.4,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'HR',
//     countryCode: 'HR',
//     country: 'Croatia',
//     women: 32.5,
//     men: 67.5,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'HU',
//     countryCode: 'HU',
//     country: 'Hungary',
//     women: 13.1,
//     men: 86.9,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'IE',
//     countryCode: 'IE',
//     country: 'Ireland',
//     women: 27.9,
//     men: 72.1,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'IT',
//     countryCode: 'IT',
//     country: 'Italy',
//     women: 33,
//     men: 67,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'LT',
//     countryCode: 'LT',
//     country: 'Lithuania',
//     women: 27.7,
//     men: 72.3,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'LU',
//     countryCode: 'LU',
//     country: 'Luxembourg',
//     women: 35,
//     men: 65,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'LV',
//     countryCode: 'LV',
//     country: 'Latvia',
//     women: 30.3,
//     men: 69.7,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'MT',
//     countryCode: 'MT',
//     country: 'Malta',
//     women: 27.8,
//     men: 72.2, 
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'NL',
//     countryCode: 'NL',
//     country: 'Netherlands',
//     women: 36,
//     men: 64,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'PL',
//     countryCode: 'PL',
//     country: 'Poland',
//     women: 27.5,
//     men: 72.5,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'PT',
//     countryCode: 'PT',
//     country: 'Portugal',
//     women: 35.7,
//     men: 64.3,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'RO',
//     countryCode: 'RO',
//     country: 'Romania',
//     women: 20,
//     men: 80,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'SE',
//     countryCode: 'SE',
//     country: 'Sweden',
//     women: 46.4,
//     men: 53.6,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'SI',
//     countryCode: 'SI',
//     country: 'Slovenia',
//     women: 29.5,
//     men: 70.5,
//     time: 'Q4-2022',
//     unit: '%'
//   },
//   {
//     id: 'SK',
//     countryCode: 'SK',
//     country: 'Slovakia',
//     women: 22,
//     men: 78,
//     time: 'Q4-2022',
//     unit: '%'
//   }
// ]

  
//   export const data = {
//     labels: dataNatParlEU.map((data) => data.country),
//     datasets: [
//       {
//         label: 'Women (% of total members)',
//         data: dataNatParlEU.map((data) => data.women),
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: "black",
//         borderWidth: 2
//       },
//       {
//         label: 'Men (% of total members)',
//         data: dataNatParlEU.map((data) => data.men),
//         backgroundColor: 'rgb(75, 192, 192)',
//         borderColor: "black",
//         borderWidth: 2
//       },
//     ],
//   };
  
//   export default function StackedBarParl() {
//     return <Bar options={options} data={data} />;
//   }
  

// // function StackedBarParl({ chartData }) {
// //     return (
// // <div className="chart-container">
// //         <h2 style={{ textAlign: "center" }}>Men and women in national parliaments</h2>
// //         <Bar
// //           data={chartData}
// //           options={{
// //             plugins: {
// //                 title: {
// //                     display: false,
// //                   text: "",
// //                 },
// //               },
// //               responsive: true,
// //               scales: {
// //                 x: {
// //                   stacked: true,
// //                 },
// //                 y: {
// //                   stacked: true,
// //                 },
// //               },
// //           }}
// //         />
// //       </div>
// //         );
// //     }
// //     export default StackedBarParl;


