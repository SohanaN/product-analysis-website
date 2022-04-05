import { useEffect, useState } from "react"

const useChartFunction = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => {
                const loadedData = data.data;
                const productData = loadedData.map(product => product)
                setProducts(productData);
            })
    }, []);
    return [products, setProducts];
}

export default useChartFunction;

