import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = () => {
    const [searchTokenPair, setSearchTokenPair] = useState({
        slug: "",
        loading: false,
        tokens: [],
        pairs: []
    });

    useEffect(() => {
    
        if (searchTokenPair.slug !== "") {
            const timeoutId = setTimeout(() => {    
                const querySearchTokensPairs = async () => { 
                    
                    axios.all([
                        axios.get('https://backend-iotex.herokuapp.com/allTokens'), 
                        axios.get('https://backend-iotex.herokuapp.com/allPairs')
                    ])
                    .then(axios.spread((tokens, pairs) => {
                        const lowerCaseToken = searchTokenPair.slug.toLowerCase();                        

                        const filteredTokenData = tokens.data.allTokens.data.tokens.filter(item => {
                            var filteredTokenSymbol = item.symbol.toLowerCase().indexOf(lowerCaseToken) !== -1;
                            var filteredTokenName = item.name.toLowerCase().indexOf(lowerCaseToken) !== -1;
                            return filteredTokenSymbol + filteredTokenName;
                        });

                        const filteredPairData = pairs.data.allPairs.data.pairs.filter((filt) => {
                            var filteredPair1 = filt.token0.symbol.toLowerCase().indexOf(lowerCaseToken) !== -1;
                            var filteredPair2 = filt.token1.symbol.toLowerCase().indexOf(lowerCaseToken) !== -1;
                                return filteredPair1 + filteredPair2;
                            });

                        setSearchTokenPair({
                        ...searchTokenPair,
                        tokens : filteredTokenData,
                        pairs : filteredPairData,
                        loading : true 
                        })
                        
                        console.log(filteredTokenData);
                        console.log(filteredPairData);
                    }));

                }
                querySearchTokensPairs();
            }, 1000);
            return () => clearTimeout(timeoutId);
        } else {
            setSearchTokenPair({
                ...searchTokenPair,
                tokens : [],
                pairs : [],
                loading : false 
            })            
        }  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTokenPair.slug]);
    
    return { searchTokenPair, setSearchTokenPair };
}

export default useSearch