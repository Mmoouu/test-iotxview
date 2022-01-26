import React from "react";
import { useContext } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChartViewContext from "../context/ChartViewContext";
import IotexPriceContext from "../context/IotexPriceContext";

const IotexInfoCard = () => {
    const { iotexPrice } = useContext(IotexPriceContext);
    const { view } = useContext(ChartViewContext);

    const loadingElements = ['1', '2', '3', '4', '5'];
    
    return (
    <>
    { iotexPrice.loading ? (
        
            <div className="card">
                <div className="card-header">
                    {/* <i className="cf cf-iotx cripto-icon"></i> */}
                    {/* eslint-disable-next-line react-hooks/exhaustive-deps     */}
                    <img className="cripto-icon" src={require('../icons/svg/color/'+iotexPrice.info.symbol.toLowerCase()+'.svg').default} />  
                    <h4
                        className="card-title">                                    
                        {iotexPrice.info.name+' ('+iotexPrice.info.symbol.toUpperCase()+')'}
                    </h4>                                                                        
                </div>
                <div className="card-body">
                    <PerfectScrollbar className="balance-widget">
                        <li className="fade-in">
                            <h5>Price</h5>
                            <div className="text-right">
                                <h5>$ {iotexPrice.info.quote.USD.price.toFixed(4)}</h5>
                                <span className={iotexPrice.info.quote.USD.percent_change_24h <= 0 ? 'text-danger':'text-success' }>
                                    <i className={iotexPrice.info.quote.USD.percent_change_24h <= 0 ? 'icofont-arrow-down arrow-position' : 'icofont-arrow-up arrow-position'}></i>
                                    {iotexPrice.info.quote.USD.percent_change_24h.toFixed(2)+' %'}
                                </span>
                            </div>
                        </li>
                        <li className="fade-in">
                            <h5>Market Cap</h5>
                            <div className="text-right">
                                <h5>$ {iotexPrice.info.quote.USD.market_cap.toLocaleString(undefined, {maximumFractionDigits: 0})}</h5>
                                <span>{'Last 24H'}</span>
                            </div>
                        </li>
                        <li className="fade-in">
                            <h5>Fully Diluted<br></br>Market Cap</h5>
                            <div className="text-right">
                                <h5>$ {iotexPrice.info.quote.USD.fully_diluted_market_cap.toLocaleString(undefined, {maximumFractionDigits: 0})}</h5>
                                <span>{'Last 24H'}</span>
                            </div>
                        </li>
                        <li className="fade-in">
                            <h5>Volume<span> 24H</span></h5>
                            <div className="text-right">
                                <h5>$ {iotexPrice.info.quote.USD.volume_24h.toLocaleString(undefined, {maximumFractionDigits: 0})}</h5>
                                <span className={iotexPrice.info.quote.USD.volume_change_24h <= 0 ? 'text-danger':'text-success' }>
                                    <i className={iotexPrice.info.quote.USD.volume_change_24h <= 0 ? 'icofont-arrow-down arrow-position' : 'icofont-arrow-up arrow-position'}></i>
                                    {iotexPrice.info.quote.USD.volume_change_24h.toFixed(2)+' %'}
                                </span>
                            </div>
                        </li>
                        <li className="fade-in">
                            <h5>Supply</h5>
                            <div className="text-right">
                                <h5>{iotexPrice.info.circulating_supply.toLocaleString(undefined, {maximumFractionDigits: 0})}</h5>
                                <span title="MAX SUPPLY 10,0000,0000,000">{((iotexPrice.info.circulating_supply*100)/10000000000).toFixed(2)+' %'}</span>
                            </div>
                        </li>
                    </PerfectScrollbar>
                </div>
            </div>
        
        ) : (
        
            <div className="card">
                <div className="card-header loading">
                    <h4
                    className={'loading-text'}>
                    </h4>
                </div>
                <div className="card-body ">
                    <PerfectScrollbar className="balance-widget">  
                    <ul>
                    {loadingElements.map((value, index) => {
                        return (
                            <li key={value}>
                                <h5
                                className="loading-text">                                    
                                </h5>
                                <div className="text-right">
                                    <h5
                                    className="loading-text">
                                    </h5>
                                    <span className={'loading-text'}></span>                                                    
                                </div>
                            </li>
                        )                                        
                    })}                                            
                    </ul>
                    </PerfectScrollbar>
                </div>
            </div>
            
        )}   
        </>             
    );
}

export default IotexInfoCard