'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
//   Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const Circle = ({data,options}) => {
  return <Doughnut data={data} options={options}/>;
};

export default Circle;
