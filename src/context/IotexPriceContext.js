import { createContext, useState, useEffect } from "react";
import axios from "axios";

const IotexPriceContext = createContext();

const IotexPriceProvider = ({ children }) => {
    const [ iotexPrice, setIotexPrice ] = useState({
        loading: false,
        info:  []
    }); 

    useEffect(() => {
    
        let delay = 1000;
    
        let timerId = setTimeout(function request() {    

        const queryIotexPrice = async () => {
        
            axios.get('https://backend-iotex.herokuapp.com/price')
            .then((response) => {
                // console.log(response.data.iotxPrice.data.IOTX);
                setIotexPrice({
                    ...iotexPrice,
                    info: response.data.iotxPrice.data.IOTX,
                    loading: true
                })
            })
        .catch((error)=>{
        console.log(error);
        });
    }

    queryIotexPrice();

    if(!iotexPrice.loading){
        delay = 100000;
    }

    timerId = setTimeout(request, delay);
    }, delay);

    return () => {
        clearTimeout(timerId);
        setIotexPrice({
            loading: false,
            info:  []
        }); // This worked for me
    };
    // return () => clearInterval(interval);

}, [setIotexPrice])

const data = { iotexPrice };

return <IotexPriceContext.Provider value={data}>{children}</IotexPriceContext.Provider>;
}

export { IotexPriceProvider };
export default IotexPriceContext;

