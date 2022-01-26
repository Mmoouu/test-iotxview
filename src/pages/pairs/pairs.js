import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import pairs from "../../components/pairList";
import SearchBar from "../../components/SearchBar";

const Pairs = () => {
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
                                <h4 className="card-title">Pairs</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive transaction-table">
                                    <table className="table table-striped responsive-table">
                                        <thead>
                                            <tr>
                                                <td>#</td>
                                                <th>Name</th>
                                                <th>Liquidity (24H)</th>
                                                <th>Volume (24H)</th>
                                                <th>Volume (7D)</th>
                                                <th>Fees (24H)</th>
                                                <th>1y Fees / Liquidity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* {data.tokenDayDatas.map((Tokens) => (
                                        <li key={Tokens.token.id}>{Tokens.token.name}</li>
                                        ))} */}
                                        {pairs.map((pairsList) => (
                                            <tr key={pairsList.id}>
                                                <td className="list-id">{pairsList.id}</td>
                                                <td className="coin-name">
                                                    {/* <Icon className="cryptoIcon" name={pairsList.symbol} size={25} /> */}
                                                    {/* <Icon className="cryptoIcon" name={pairsList.symbolpair} size={25} /> */}
                                                    <i className={'cc '+pairsList.symbol.toUpperCase()+'-alt'}></i>{' - '}
                                                    <i className={'cc '+pairsList.symbolpair.toUpperCase()+'-alt'}></i>
                                                    {pairsList.names}
                                                </td>
                                                <td>{pairsList.liquidity}</td>
                                                <td>{pairsList.volumeday}</td>
                                                <td>{pairsList.volumeweek}</td> 
                                                <td>{pairsList.fees}</td>                                                                                            
                                                <td className="text-danger">
                                                    <span className="danger-arrow">
                                                        <i className="icofont-arrow-down"></i>
                                                        {pairsList.feesliquidity}
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

export default Pairs;