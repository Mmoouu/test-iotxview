import { useState, useEffect } from "react";
import axios from "axios";

const IotexChartSeries = () => {
    const [chartSeries, setChartSeries] = useState({
        loading: false,
        series: [{
            name: "",
            data: []       
        }],
        options: {}
    }); 

    useEffect(() => {  
    
        const timeoutId = setTimeout(() => { 
            const queryChartData = async () => {
            
                axios.get('https://backend-iotex.herokuapp.com/getPriceDataToken?token=0xa00744882684c3e4747faefd68d283ea44099d03&date=1632614400')
                .then((response) => {
                    // console.log(response.data.priceData.data.tokenDayDatas);
                    setChartSeries({
                        ...chartSeries,
                        series: [{
                            name: "Price",
                            data: response.data.priceData.data.tokenDayDatas.map(consult => (
                                [Number(consult.date+"000"), Number((Number(consult.priceUSD)).toFixed(4))]
                            ))   
                        }],
                        loading: true
                    })
                })
                .catch((error)=>{
                console.log(error);
                });
            }

            queryChartData();
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            setChartSeries({
                loading: false,
                series: [{
                    name: "",
                    data: []       
                }],
            }); 
        };

    }, [setChartSeries])

return { chartSeries, setChartSeries };
}

export default IotexChartSeries