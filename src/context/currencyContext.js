import { useContext,createContext,useEffect,useState } from "react";
import axios from "axios";

const CurrencyContext = createContext();

const CurrencyProvider = ({children}) =>{
    const [currencyData, setCurrencyData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const getCurrencyData = async (num) =>{
        try {
            setLoading(true);
            if(num >10){
              const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${num}&sparkline=false&price_change_percentage=24h%2C7d`
              );
              setCurrencyData(response.data);
            }
            else{
              const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${num}&sparkline=false&price_change_percentage=24h%2C7d`
              );
              setCurrencyData(response.data);
            }
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
    }
    return (
        <CurrencyContext.Provider value={{currencyData,isLoading,getCurrencyData}}>
            {children}
        </CurrencyContext.Provider>
    )
}

const useCurrency = () =>useContext(CurrencyContext)

export {useCurrency,CurrencyProvider}