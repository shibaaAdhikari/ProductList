// // pages/piechart.jsx
// import React, { useEffect } from "react";
// import { useStore } from "@/Store/store";
// import Chart from "chart.js/auto";

// const PieChartPage = () => {
//   const { fetchData, getFilteredProducts } = useStore();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const data = getFilteredProducts();
//     renderPieChart(data);
//   }, [getFilteredProducts]);

//   const renderPieChart = (data) => {
//     const canvas = document.getElementById("pieChart");
//     const ctx = canvas.getContext("2d");

//     // Check if a Chart instance already exists and destroy it
//     if (canvas.chart) {
//       canvas.chart.destroy();
//     }

//     // Calculate category counts
//     const categoriesMap = new Map();
//     data.forEach((product) => {
//       const category = product.category;
//       if (categoriesMap.has(category)) {
//         categoriesMap.set(category, categoriesMap.get(category) + 1);
//       } else {
//         categoriesMap.set(category, 1);
//       }
//     });

//     // Convert map to arrays for Chart.js data
//     const categoryNames = Array.from(categoriesMap.keys());
//     const categoryCounts = Array.from(categoriesMap.values());

//     // Create a new Chart instance
//     canvas.chart = new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: categoryNames,
//         datasets: [
//           {
//             data: categoryCounts,
//             backgroundColor: [
//               "red",
//               "blue",
//               "green",
//               // Add more colors as needed
//             ],
//           },
//         ],
//       },
//       options: {
//         // Configure options as needed
//       },
//     });
//   };

//   return (
//     <div >
//       <canvas id="pieChart"></canvas>
//     </div>
//   );
// };

// export default PieChartPage;
