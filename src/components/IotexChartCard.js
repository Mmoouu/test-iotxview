import React, { useState, useContext } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import IotexChartSeries from "../hooks/useIotexChartSeries";
import IotexChartOptions from "../hooks/useIotexChartOptions";
import IotexPriceContext from "../context/IotexPriceContext";

const IotexChart = () => {
  const { iotexPrice } = useContext(IotexPriceContext);

  const { chartOptions } = IotexChartOptions();
  const { chartSeries } = IotexChartSeries();  
  const [ timeline, setTimeline ] = useState('all');
  const [ loading, setLoading ] = useState(false);

  const handleData = (e) => { 

    const { value } = e.currentTarget;
    setTimeline(value);
      
      switch (value) {
        case 'one_month':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('24 Dec 2021').getTime(),
            new Date('24 Jan 2022').getTime() 
          )
          break
        case 'one_week':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('17 Jan 2022').getTime(),
            new Date('24 Jan 2022').getTime()
          )
          break
        case 'all':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Sep 2021').getTime(),
            new Date('24 Jan 2022').getTime()
          )
          break
        default:
      }
    }

    if (chartOptions.loading && chartSeries.loading && iotexPrice.loading && !loading){
      const timeoutId = setTimeout(() => { 
        ApexCharts.exec( 'area-datetime', 'addYaxisAnnotation',({
          y: iotexPrice.info.quote.USD.price.toFixed(4),
          borderColor: '#00CDBA',
          label: {
            borderColor: '#00CDBA',
            offsetY: 6,
            offsetX: 64,
            style: {
              color: '#000',
              background: '#00CDBA',
              cssClass: 'apexcharts-yaxis-annotation-label',
              padding: {
                left: 2,
                right: 2,
                top: 0,
                bottom: 2,
              }
            },
            text: 'US$ '+iotexPrice.info.quote.USD.price.toFixed(4)        
          }
        }))
      }, 5000);
      setLoading(true);
    }
    

    return (
      
        <div className="card home-chart">
          <div className="card-header">
            <div className="toolbar">
              <button id="all"
                value={'all'}  
                onClick={handleData}
                className={'btn btn-outline-primary '+ (timeline==='all' ? 'active' : '')}>
                ALL
              </button>
              &nbsp;
              <button
                id="one_month"
                value={'one_month'}
                onClick={handleData}
                className={'btn btn-outline-primary '+ (timeline==='one_month' ? 'active' : '')}>
                1M
              </button>
              &nbsp;
              <button id="one_week" 
                value={'one_week'} 
                onClick={handleData}
                className={'btn btn-outline-primary '+ (timeline==='one_week' ? 'active' : '')}>
                1W
              </button>              
            </div>                 
          </div> 
          <div className={'card-body'}>
            <div className=" home-chart-height">
              <div id="chart">
                { !loading ? (
                  <div className="loading-chart"></div>
                ):(
                  <div id="chart-timeline">
                  <ReactApexChart options={chartOptions.options} series={chartSeries.series} type="area" height={350} /> 
                  </div>
                ) 
                }                
              </div>
            </div>
          </div>
        </div>
      
    );
  }

  export default IotexChart