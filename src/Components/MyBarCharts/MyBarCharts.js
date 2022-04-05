import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartFunction from '../../hooks/useChartFunction';

const MyBarCharts = () => {
    const [products, setProducts] = useChartFunction();
    return (
        <BarChart width={600} height={400} data={products}>
            <Bar dataKey="revenue" fill="#8884d8" />
            <XAxis dataKey="month"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </BarChart>
    );
};

export default MyBarCharts;