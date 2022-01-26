import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useAllTokens from "../hooks/useAllTokens";
import IotexPriceContext from "../context/IotexPriceContext";

const TopTokensCard = () => {
    const { allTokens, setAllTokens } = useAllTokens();
    const [ order, setOrder ] = useState("Price");
    const { iotexPrice } = useContext(IotexPriceContext);

    const handleOrderBy = (e) => {
        const { value } = e.currentTarget;
        setOrder(value);
        console.log(order);          
    };

    if(iotexPrice.loading){
        var coinMarketPrice = iotexPrice.info.quote.USD.price;
    } else {
        var coinMarketPrice = 0;
    }
    
    

    const loadingElements = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Top Tokens</h4>
                    <Link className="view-more" to='/tokens'>View More</Link>
                </div>                                
                <div className="card-body">
                    <div className="table-responsive transaction-table">
                        <table className="table table-striped responsive-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>
                                    {order === "name" && <i className={'icofont-arrow-down active-order-arrow'}></i>}
                                    <button className="order-by" value={'name'} onClick={handleOrderBy}>Name</button>
                                    </th>
                                    <th>
                                    {order === "symbol" && <i className={'icofont-arrow-down active-order-arrow'}></i>}   
                                    <button className="order-by" value={'symbol'} onClick={handleOrderBy}>Symbol</button>
                                    </th>
                                    <th>
                                    {order === "Liquidity" && <i className={'icofont-arrow-down active-order-arrow'}></i>}                                        
                                    <button className="order-by" value={'Liquidity'} onClick={handleOrderBy} >Liquidity</button>
                                    </th>
                                    <th>
                                    {order === "Volume" && <i className={'icofont-arrow-down active-order-arrow'}></i>}                                        
                                    <button className="order-by" value={'Volume'} onClick={handleOrderBy} >Volume (24H)</button>
                                    </th>
                                    <th>
                                    {order === "Price" && <i className={'icofont-arrow-down active-order-arrow'}></i>}                                        
                                    <button className="order-by" value={'Price'} onClick={handleOrderBy} >Price</button>
                                    </th>
                                    <th>Price Change (24H)</th>
                                </tr>
                            </thead>
                            <tbody>  
                            {allTokens.loading ? (
                                order === "Price" && 
                                allTokens.tokens
                                // .sort((a, b) => a.totalLiquidity > b.totalLiquidity ? 1 : -1)
                                .sort((a, b) => b.derivedETH - a.derivedETH)
                                .slice(0, 10)
                                .map((tokenList, i) => (
                                    <tr className="fade-in" key={i}>
                                        <td className="list-id">{i+1}</td>
                                        <td className="coin-name">
                                            {/* <img
                                            className="cripto-list-icon"
                                            src={require(`../../icons/blockchains/iotex/validators/assets/${name.toLowerCase()}/logo.png`).default}
                                            // src={require('../../icons/blockchains/iotex/validators/assets/airfoil/logo.png').default}
                                            /> */}
                                            {tokenList.name}
                                        </td>
                                        <td>{tokenList.symbol.toUpperCase()}</td>
                                        <td>{'US$ '+(tokenList.totalLiquidity*(tokenList.derivedETH*coinMarketPrice)).toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                                        <td>{''}</td> 
                                        <td>{'US$ '+(tokenList.derivedETH*coinMarketPrice).toLocaleString(undefined, {maximumFractionDigits: 2})}</td>                                                                                            
                                        <td className="text-danger">
                                            <span className="danger-arrow">
                                                <i className="icofont-arrow-down"></i>
                                                {tokenList.priceChange}
                                            </span>
                                        </td>
                                    </tr>    
                                ))
                            ):(
                                loadingElements.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="list-id loading-text"></td>
                                            <td className="coin-name loading-text"></td>
                                            <td className="loading-text"></td>
                                            <td className="loading-text"></td>
                                            <td className="loading-text"></td> 
                                            <td className="loading-text"></td>                                                                                            
                                            <td className="text-danger loading-text"></td>
                                        </tr> 
                                    )                                        
                                })
                            )} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
    );
}

export default TopTokensCard