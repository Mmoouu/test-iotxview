import React from "react";
import useSearch from '../hooks/useSearch';
// import Icon from "react-crypto-icons";
import useOnclickOutside from "react-cool-onclickoutside";

const SearchBar = () => {
  const { data, setData } = useSearch();

  const ref = useOnclickOutside(() => {
    setData({
      slug: "",
      results: []
    });
  });
    
  return (
    <div ref={ref}>
      <div className="col-xxl-12 col-xl-12">
        <div className="card">                                
          <div className="search">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search Tokens and Pairs"
                value={data.slug}
                onChange={(e) => setData({ ...data, slug: e.target.value })}
              />  
              <span className="input-group-text"><i className="icofont-search"></i></span>                                          
            </div>                                    
          </div>                                                               
        </div>
      </div>                      
      {data.results.length > 0 ? (
        <div className="col-xxl-12 col-xl-12">
          <div className="card-box">
            <div className="card-body">                  
              <div className="search-table"> 
                {/* <tbody> */}
                <ul className="ultimo">
                  {data.results.map((tokenList) => (
                    
                      <li key={tokenList.id}>
                        {/* <Icon className="cryptoIcon" name={tokenList.symbol} size={30} /> */}
                        <i className={'cc '+tokenList.symbol.toUpperCase()+'-alt'}></i>                    
                        <p>{tokenList.symbol.toUpperCase()}</p>
                      
                        <p>{tokenList.name.toUpperCase()}</p>
                      </li>
                      
                  ))}  
                  </ul> 
                {/* </tbody>                          */}
              </div>                 
            </div>
          </div>
        </div>     
      ):(
        null
      ) }          
    </div>
  );
}

export default SearchBar