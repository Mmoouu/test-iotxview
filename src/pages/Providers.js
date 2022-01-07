import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { ChartViewProvider } from "../context/ChartViewContext";
import Header from "../components/Header";
import Overview from "./overview/overview";
import Home from "./home/home";
import Tokens from "./tokens/tokens";
import Pairs from "./pairs/pairs";
import React from 'react';
import ScrollToTop from "../components/ScrollToTop";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const Providers = () => {

  const client = new ApolloClient({
    uri: "https://graph.mimo.exchange/subgraphs/name/mimo/mainnet_v6_2",
    cache: new InMemoryCache()
  });

  return (
      <Router> 
        <ApolloProvider client={client}>
          <AuthProvider>
            <ThemeProvider>
              <LanguageProvider>  
                <ChartViewProvider>        
                  <Header />
                  <ScrollToTop>             
                    <Routes>
                      <Route path='/' exact element={<Home />} />
                      <Route path='/overview' element={<Overview />} />
                      <Route path='/tokens' exact element={<Tokens />} />
                      <Route path='/pairs' exact element={<Pairs />} />
                    </Routes>
                  </ScrollToTop>                      
                </ChartViewProvider>    
              </LanguageProvider>
            </ThemeProvider>
          </AuthProvider>
        </ApolloProvider>           
      </Router>    
  );
};




export default Providers;
