import { useContext } from "react";
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext";
import ChartViewContext from "../../context/ChartViewContext";
import PerfectScrollbar from 'react-perfect-scrollbar';
import FirstChart from "../../components/FirstChart";
// import SecondChart from "../../components/SecondChart";
import Icon from "react-crypto-icons";
// import axios from "axios";
import tokens from "../../components/tokenLists";
import SearchBar from "../../components/SearchBar";

const Overview = () => {
    const { theme } = useContext(ThemeContext);
    const { view } = useContext(ChartViewContext);
    
    return (
        <div id="main-wrapper" className={theme}>
            <div className="content-body">
                <div className={view}>
                    <div className="row">                        
                        <SearchBar/> 
                        
                        {/* <div className="col-xxl-1 col-xl-1">
                            <div className="card">                                
                            {view === "container" ? (
                                        <button onClick={handleChart} class="btn btn-outline-primary">AM</button>
                                    ):(
                                        <button onClick={handleChart} class="btn btn-outline-primary">SM</button>
                                    )}                                                               
                            </div>
                        </div> */}

                        <div className={view === "container" ? ( "col-xxl-4 col-xl-4" ):( "col-xxl-3 col-xl-3" )}>
                            <div className="card">
                                <div className="card-header">
                                    {/* <h4 className="card-title">{loading ? (tokenData.totalSupply) : 'IoTeX (IOTX)'}</h4> */}
                                    <h4 className="card-title">IoTeX (IOTX)</h4>
                                </div>
                                <div className="card-body">
                                    <PerfectScrollbar className="balance-widget">
                                        <li>
                                            <h5>Price</h5>
                                            <div className="text-right">
                                                <h5>US$ 0,12</h5>
                                                <span className={'red'}>+ 3.30%</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Transactions</h5>
                                            <div className="text-right">
                                                <h5>4,627</h5>
                                                <span>last 24H</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Pairs</h5>
                                            <div className="text-right">
                                                <h5>339</h5>
                                                <span>last 24H</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Fees</h5>
                                            <div className="text-right">
                                                <h5>US$ 1.886</h5>
                                                <span>last 24H</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>Volume</h5>
                                            <div className="text-right">
                                                <h5>US$ 1.886</h5>
                                                <span>last 24H</span>
                                            </div>
                                        </li>
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                        <div className={view === "container" ? ( "col-xxl-8 col-xl-8" ):( "col-xxl-9 col-xl-9")}>
                            {/* <SecondChart/>  */}
                            <FirstChart/>                           
                        </div>

                        <div className="col-xxl-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Top Tokens</h4>
                                    <Link to='/tokens' title="Tokens">View More</Link>
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
                                                        <Icon className="cryptoIcon" name={tokenList.symbol} size={25} />
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
        </div>
    );
};

export default Overview;