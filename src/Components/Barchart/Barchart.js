import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts';
const Barchart = () => {
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
        <BarChart width={800} height={400} data={products}>
            <Bar dataKey="revenue" fill="#8884d8" />
            <XAxis dataKey="month"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </BarChart>
    );
};

export default Barchart;