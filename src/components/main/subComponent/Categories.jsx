import React,{useState,useEffect} from 'react'
import styles from "../main.module.css"
import { useCurrency } from '../../../context/currencyContext'
export const Categories = () => {
    const categories = ["Favourites","CryptoCurrencies","DeFi","NFTs & collectibles"]
    const [noOfDataToShow,setData] = useState(10) 
    const {getCurrencyData} = useCurrency();
    useEffect(()=>{
getCurrencyData(noOfDataToShow)
    },[noOfDataToShow])
  return (
    <div className={styles.categoryWrapper}>
        <ul>
            {categories.map(category => {
                return <li className={styles.category}>
                <input type="radio" name="category" id={category} />
                <label htmlFor={category}>{category}</label>
                </li>
            })}
        </ul>
        <div>
            <span>show rows{" "}</span>
            <select name="numbers" id="" value={noOfDataToShow} onChange={(e)=>setData(e.target.value)}>
                <option  value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
                
            </select>
        </div>
    </div>
  )
}
