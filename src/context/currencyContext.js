import { useContext,createContext,useEffect,useState } from "react";
import axios from "axios";

const CurrencyContext = createContext();

const CurrencyProvider = ({children}) =>{
    const [currencyData, setCurrencyData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const getCurrencyData = async () =>{
        try {
            setLoading(true);
            const response = await axios.get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d"
            );
            console.log(response.data);
            setCurrencyData(response.data);
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