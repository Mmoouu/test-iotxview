import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Icon from "react-crypto-icons";
import pairs from "../../components/pairList";

const Pairs = () => {
    const { theme } = useContext(ThemeContext);

    const loadData = async () => {
        const response = await fetch("https://backend-iotex.herokuapp.com/tokenInfo?token=0x0498509618738c72f672cfc1aa894ced31e0c2ee");
        const data = await response.json();
        console.log(data.tokenInfo.data.token);
        console.log(JSON.stringify(data.tokenInfo.data.token));
        // this.setState({
        //   people: data.results
        // });
      };

    //   const LoadTokens = async () => {
    //     const response = await fetch("https://graph.mimo.exchange/subgraphs/name/mimo/mainnet_v6_2");
    //     const res = await response.json();
    //     console.log(res);
    //     // this.setState({
    //     //   people: data.results
    //     // });
    //   };

    //   const res = await fetch('https://backend-iotex.herokuapp.com/', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       items: items,
    //       user: user,
    //       email: email.toLowerCase(),
    //       bill_amount: calculatePrice(),
    //     }),
    //   });

    return (
        <div id="main-wrapper" className={theme}>
            <div className="content-body">
                <div className="container">
                    <div className="col-xxl-12 col-xl-12">
                        <div className="card">                                
                            <div className="search">
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Tokens and Pairs" />
                                        <span onClick={loadData} className="input-group-text"><i className="icofont-search"></i></span>
                                    </div>
                                </form>
                            </div>                                                               
                        </div>
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
                                                    <Icon className="cryptoIcon" name={pairsList.symbol} size={25} />
                                                    <Icon className="cryptoIcon" name={pairsList.symbolpair} size={25} />
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