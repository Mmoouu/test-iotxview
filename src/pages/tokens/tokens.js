import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Icon from "react-crypto-icons";
import tokens from "../../components/tokenLists";
// import { useQuery, gql } from "@apollo/client";

// const FILMS_QUERY = gql`
// {
//     tokenDayDatas(first:100, where: {token: "0xa00744882684c3e4747faefd68d283ea44099d03"}) {
//       date
//       token {
//         id
//         name
//       }
//       priceUSD
//     }
//   }
// `
// ;

const Tokens = () => {
    const { theme } = useContext(ThemeContext);
    // const { data, loading, error } = useQuery(FILMS_QUERY);

    // if (loading) return "Loading...";
    // if (error) return <pre>{error.message}</pre>

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
                                        <span className="input-group-text"><i className="icofont-search"></i></span>
                                    </div>
                                </form>
                            </div>                                                               
                        </div>
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
    );
};

export default Tokens;