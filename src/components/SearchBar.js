import React, { useState, useEffect } from "react";
import useSearch from '../hooks/useSearch';
import useOnclickOutside from "react-cool-onclickoutside";
import PerfectScrollbar from 'react-perfect-scrollbar';

const SearchBar = () => {
  const { searchTokenPair, setSearchTokenPair } = useSearch();
  const [ viewMore, setViewMore ] = useState({
    tokens: 5,
    pairs: 5
  });

  const viewMoreSearch = (e) => {
    const { value } = e.currentTarget;

    if (value === "tokens"){
      let num = (Number(viewMore.tokens)+5);
      setViewMore({
        ...viewMore,
        tokens: num
      })   
    } else {
      let num = (Number(viewMore.pairs)+5);
      setViewMore({
        ...viewMore,
        pairs: num
      })   
    }
  }
  
  const ref = useOnclickOutside(() => {
    setSearchTokenPair({
      slug: "",
      loading: false,
      tokens: [],
      pairs : []
    });
  }); 
    
  return (
    <div ref={ref}>      
      <div className="card">                                
        <div className="search">
          <div className="input-group">
            <span className="input-group-text">
            {!searchTokenPair.loading && searchTokenPair.slug !== "" ? ( <i className="loader"></i> ) : ( <i className="icofont-search"></i> )}
            </span>
            <input
              className="form-control"
              type="text"
              placeholder="Search Tokens and Pairs"
              value={searchTokenPair.slug}
              onChange={(e) => setSearchTokenPair({ ...searchTokenPair, slug: e.target.value })}
            />                                                        
          </div>                                    
        </div>                                                               
      </div>

      {searchTokenPair.tokens.length > 0 ? (        
        <div className="card-box search-animation">
          <div className="card-body"> 
            <PerfectScrollbar>                 
              <div className="search-table">               
                <ul className="ultimo">
                  <li key="0" className="token-title"><h6>Tokens ({searchTokenPair.tokens.length})</h6></li>
                  {searchTokenPair.tokens.length !== 0 ? (
                    searchTokenPair.tokens
                    .slice(0, viewMore.tokens)
                    .map((tokenList, i) => (                    
                      <li key={i+1}>                        
                        <p>{tokenList.name+' ('+tokenList.symbol+')'}</p>                      
                      </li>                      
                    ))                      
                  ):(
                    <li key={1}>                        
                        <p>No matches found</p>                      
                    </li>   
                  )} 
                  <li className="last-search-item" key="00"><button value={'tokens'} className="view-more-button" onClick={viewMoreSearch}>See More...</button></li> 
                </ul> 
                <ul className="ultimo">
                  <li key="0" className="token-title"><h6>Pairs ({searchTokenPair.pairs.length})</h6></li>
                  {searchTokenPair.pairs.length !== 0 ? (
                    searchTokenPair.pairs
                    .slice(0, viewMore.pairs)
                    .map((pairList, i) => (
                      <li key={i+1}>
                      <p>{pairList.token0.symbol+'-'+pairList.token1.symbol}</p>                      
                      </li>
                    ))
                  ):(
                    <li key={1}>                        
                        <p>No matches found</p>                      
                    </li>
                  )}
                  <li className="last-search-item" key="00"><button value={'pairs'} className="view-more-button" onClick={viewMoreSearch}>See More...</button></li> 
                </ul> 
              </div>  
            </PerfectScrollbar>               
          </div>
        </div>             
      ):(
        null
      ) }          
    </div>
  );
}

export default SearchBar