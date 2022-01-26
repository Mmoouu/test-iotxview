import { useState, useEffect } from "react";
import axios from "axios";

const useAllTokens = () => {
  const [allTokens, setAllTokens] = useState({
    loading: false,
    derivedETH: '',
    tokens: []
  }); 

  useEffect(() => {
    const timeoutId = setTimeout(() => { 
      const queryAllTokens = async () => {        
        axios.get('https://backend-iotex.herokuapp.com/allTokens')
        .then((response) => {
          console.log(response.data.allTokens.data.tokens);
          setAllTokens({
            ...allTokens,
            tokens : response.data.allTokens.data.tokens,
            loading: true
          })
        })
          .catch((error)=>{
          console.log(error);
        });
      }

      queryAllTokens();
      }, 1000);
      
      return () => {
        clearTimeout(timeoutId);
        setAllTokens({
            loading: false,
            tokens:  []
        }); 
      };
      
  }, [setAllTokens])

  return { allTokens, setAllTokens };
}

export default useAllTokens

