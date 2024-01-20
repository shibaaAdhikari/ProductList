// pages/piechart.jsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useStore } from "@/Store/store";
import Chart from "chart.js/auto";
import Navbar from "@/Components/navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// import React from 'react'
ChartJS.register(ArcElement, Tooltip, Legend);

const index = () => {

     const { fetchData, getCategoriesData } = useStore();
     const categoriesData = getCategoriesData();
     const [data, setData] = useState();
   const [dataset, setDataSet] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: categoriesData.map((category) => category.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  })
   

  console.log(categoriesData);
    useLayoutEffect(() => {
      fetchData();
      
    }, []);
    const categoryCounts = categoriesData.map((category) => category.count);
    useEffect(() => {
      setDataSet((prev) => ({
        ...prev,
        datasets: [
          {
            label: '# of Votes',
            data: categoriesData.map((category) => category.count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }));
    }, [JSON.stringify(categoriesData)]);
    
         const categoryNames = categoriesData.map((category) => category.name);
       
    console.log(dataset);
  return (
    <>
    <Navbar/>
    <div className="w-[40rem] h-[40rem] flex justify-center m-auto pt-12">

     { <Doughnut data={dataset} />}
    </div>
    </>
  )
}

export default index

