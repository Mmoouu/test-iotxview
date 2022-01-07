import { useState, useEffect } from "react";
import tokens from '../components/tokenLists';

const useSearch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = () => {
          const results = tokens.filter((filt) => {
            return filt.symbol.search(data.slug) !== -1;
          });
          setData({ ...data, results: results });
        //   setData(results);
          console.log(results);
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);
  
  return { data, setData };
}

export default useSearch