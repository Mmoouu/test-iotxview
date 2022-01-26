import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext";
import overview_1 from '../../images/overview_1.png';
import newTokens from '../../components/newTokenList';
import IotexPriceContext from "../../context/IotexPriceContext";


const Home = () => {
    const { theme } = useContext(ThemeContext);
    const { iotexPrice } = useContext(IotexPriceContext);

    return (
        <>
        <div id="main-wrapper" className={theme}>
            <div className="intro" id="intro" data-scroll-index="0">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-md-6">
                            <div className="intro-content pb-5">
                                <h1>The first trading suite for IoTeX</h1>
                                <p>DeFi and cryptocurrency replacing traditional finance are on their way.
                                    Though the crypto space is evolving at high speed, the next big step is here.
                                    To offer a seamless trading experience, IoTeXView offers the most comprehensive
                                    tools for trading on the IoTeX blockchain, including but not limited to price
                                    bot and price alert signals for a smooth and better DeFi experience.</p>
                                <div className="intro-btn">
                                    <a href='https://t.me/iotexview' rel='noopener noreferrer' target='_blank' className="btn btn-primary">Join the Comunity</a>
                                    <Link to={"/overview"} className="btn btn-outline-primary ml-20">Launch App</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 py-md-5"> 
                            <div className="intro-demo_img">
                                <img src={overview_1} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-xxl-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Recently Added</h4>
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
                                            {newTokens.map((tokenList) => (
                                                <tr key={tokenList.id}>
                                                    <td>{tokenList.id}</td>
                                                    <td key={tokenList.symbol} className="coin-name">
                                                        <i className={'cc '+tokenList.symbol.toUpperCase()+'-alt '+tokenList.symbol.toUpperCase()}></i>
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
        </div>
        </>
    );
};

export default Home;