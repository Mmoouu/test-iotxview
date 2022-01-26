import { useState, useEffect } from "react";
import axios from "axios";

const useIotexPrice = () => {
  const [iotexPrice, setIotexPrice] = useState({
    loading: false,
    info: []
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
    // return () => clearInterval(interval);

  }, [setIotexPrice])

  return { iotexPrice };
}

export default useIotexPrice

