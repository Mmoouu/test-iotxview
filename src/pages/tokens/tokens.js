import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import SearchBar from "../../components/SearchBar";
import tokens from "../../components/tokenLists";

const Tokens = () => {
    const { theme } = useContext(ThemeContext);



    return (
        <div id="main-wrapper" className={theme}>
            <div className="content-body">
                <div className="container">
                    <div className="col-xxl-12 col-xl-12">                                                
                        <SearchBar/>
                    </div>
                    <div className="col-xxl-12 col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Tokens</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive transaction-table">
                                    <table className="table table-striped responsive-table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Symbol</th>
                                                <th>Liquidity</th>
                                                <th>Volume (24H)</th>
                                                <th>Price</th>
                                                <th>Price Change (24H)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* {data.tokenDayDatas.map((Tokens) => (
                                        <li key={Tokens.token.id}>{Tokens.token.name}</li>
                                        ))} */}
                                        {tokens.map((tokenList) => (
                                            <tr key={tokenList.id}>
                                                <td className="list-id">{tokenList.id}</td>
                                                <td className="coin-name">
                                                    <i className={'cc '+tokenList.symbol.toUpperCase()+'-alt'}></i>
                                                    {/* <Icon className="cryptoIcon" name={tokenList.symbol} size={25} /> */}
                                                    {tokenList.name}
                                                </td>
                                                <td>{tokenList.symbol.toUpperCase()}</td>
                                                <td>{tokenList.liquidity}</td>
                                                <td>{tokenList.volume}</td> 
                                                <td>{tokenList.price}</td>                                                                                            
                                                <td className="text-danger">
                                                    <span className="danger-arrow">
                                                        <i className="icofont-arrow-down"></i>
                                                        {tokenList.priceChange}
                                                    </span>
                                                </td>
                                            </tr>    
                                        ))} 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokens;