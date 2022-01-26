import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ChartViewContext from "../../context/ChartViewContext";
import IotexChart from "../../components/IotexChartCard";
import IotexInfoCard from "../../components/IotexInfoCard";
import SearchBar from "../../components/SearchBar";
import TopTokensCard from "../../components/TopTokensCard";

const Overview = () => {
    const { theme } = useContext(ThemeContext);
    const { view } = useContext(ChartViewContext);

    return (
        <div id="main-wrapper" className={theme}>
            <div className="content-body">
                <div className={view}>
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12">                                                
                            <SearchBar/>
                        </div>
                        <div className={"col-xxl-4 col-xl-4"}>
                            <IotexInfoCard /> 
                        </div> 
                        <div className="col-xxl-8 col-xl-8">                   
                            <IotexChart /> 
                        </div>
                        <div className="col-xxl-12 col-xl-12">
                        <TopTokensCard />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;