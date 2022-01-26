import { useState, useEffect, useContext } from "react";
import IotexPriceContext from "../context/IotexPriceContext";
import ThemeContext from "../context/ThemeContext";

const IotexChartOptions = () => {
    const { iotexPrice } = useContext(IotexPriceContext);
    const { theme } = useContext(ThemeContext);
    const [chartOptions, setChartOptions] = useState({
        options: {},
        loading: false
    });
    
    useEffect(() => {
        
        const queryChartData = async () => {
            setChartOptions({
                ...chartOptions, 
                options : {    
                    chart: {
                        width: '100%',
                        background: 'none',
                        id: 'area-datetime',
                        type: 'area',
                        foreColor: 'gray',
                        height: 380,
                        redrawOnParentResize: true,
                        sparkline: {
                            enabled: false,
                        },
                        zoom: {
                            autoScaleYaxis: true
                        },
                        toolbar: {
                            show: true,
                            offsetX: 0,
                            offsetY: -72,
                            tools: {
                                download: false,
                                selection: true,
                                zoom: true,
                                zoomin: true,
                                zoomout: true,
                                pan: true,
                                reset: true | '<img src="/static/icons/reset.png" width="20">',
                                customIcons: []
                            },
                        }
                    },
                    annotations: {
                        yaxis: [{
                            y: 0,
                            borderColor: '#999',
                            label: {
                                show: false,
                                text: 'Price',
                                style: {
                                    color: "#fff",
                                    background: '#00E396'
                                }
                            }
                        }],
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 0,
                        style: 'hollow',
                    },
                    xaxis: {
                        type: 'datetime',
                        min: new Date('27 Sep 2021').getTime(),
                        tickAmount: 6,
                    },
                    yaxis: {
                        show: true,
                        opposite: true
                    },
                    theme: {
                        mode: 'dark',
                    },
                    tooltip: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        shared: true,
                        followCursor: false,
                        intersect: false,
                        inverseOrder: false,
                        custom: undefined,
                        fillSeriesColor: false ,
                        theme: false,
                        style: {
                            fontSize: '13px',
                            fontFamily: undefined
                        },
                        onDatasetHover: {
                            highlightDataSeries: false,
                        },
                        x: {
                            show: true,
                            format: 'dd MMMM y',
                            formatter: undefined,
                        },
                        y: {
                            formatter: undefined,
                            title: {
                                formatter: (seriesName) => seriesName,
                            },
                        },
                        z: {
                            formatter: undefined,
                            title: 'Size: '
                        },
                        marker: {
                            show: true,
                        },
                        fixed: {
                            enabled: true,
                            position: 'topLeft',
                            offsetX: 0,
                            offsetY: 0,
                        },
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 5,
                            opacityFrom: 0.7,
                            opacityTo: 0.0,
                            stops: [0, 95]
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#90A4AE',
                        strokeDashArray: 0,
                        position: 'back',
                        xaxis: {
                            lines: {
                                show: false
                            }
                        },   
                        yaxis: {
                            lines: {
                                show: false
                            }
                        },  
                        row: {
                            colors: undefined,
                            opacity: 0.5
                        },  
                        column: {
                            colors: undefined,
                            opacity: 0.5
                        },  
                        padding: {
                            top: 0,
                            right: 20,
                            bottom: 0,
                            left: 0 
                        },  
                    },
                },
                loading : true      
            });         
        }

        queryChartData();

        return () => {            
            setChartOptions({
                loading: false,
                options:  {}
            }); 
        };

    }, [setChartOptions])

return { chartOptions, setChartOptions };
}

export default IotexChartOptions