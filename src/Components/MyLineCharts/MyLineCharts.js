import React, { useEffect, useState } from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

const MyLineCharts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => {
                const loadedData = data.data;
                const productData = loadedData.map(product => product)
                setProducts(productData);
                console.log(productData);
            })
    }, [])
    return (
        <LineChart width={500} height={400} data={products}>
            <Line dataKey={'month'}></Line>
            <Line dataKey={'sales'}></Line>
            <XAxis dataKey="revenue"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </LineChart>
    );
};

export default MyLineCharts;