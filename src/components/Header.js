import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import ChartViewContext from "../context/ChartViewContext";
import logo from "../images/logo.png"

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { view } = useContext(ChartViewContext);

  return (
        <>
            <div className={theme}>
                <div className="header">
                    <div className={view}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="header-content">
                                    <div className="header-left">
                                        <div className="brand-logo">
                                            <div>
                                                <img src={logo} alt="" />
                                                <span>IOTEXVIEW</span>
                                            </div>
                                        </div>
                                        
                                        <div className="sidebar">                
                                            <div className="menu">
                                                <ul>
                                                    <li>
                                                        <NavLink to={"/overview"} >
                                                            Overview
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/pairs'>
                                                            Pair Explorer
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tokens'>
                                                            Tokens
                                                        </NavLink>
                                                    </li>                                                
                                                </ul>                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-right">
                                        <div className="dark-light-toggle">
                                            {theme === "light-theme" ? (
                                                <span className="dark">                                          
                                                <i
                                                className="icofont-moon"
                                                onClick={handleTheme}
                                                ></i></span>
                                            ) : (
                                                <span className="light">
                                                <i
                                                className="icofont-sun-alt"
                                                onClick={handleTheme}
                                                ></i></span>    
                                            )} 
                                        </div>
                                        
                                        <div className="wallet-btn">
                                            <button className="btn btn-primary" data-scroll-nav="1">
                                            Connect Wallet
                                            </button>
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

export default Header;

