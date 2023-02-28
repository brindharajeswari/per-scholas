// Stock (/stocks/:symbol)
// If a user clicks on one of the stocks listed in the Dashboard view, 
// they should be directed to an individual stock show view. 
// This view should display all of a stock's attributes.

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import stocks from "../data.js";

function Stocks(props){
    let { symbol } = useParams()

    let stockList = stocks.filter((x) => x.symbol === symbol)

    let key = process.env.REACT_APP_KEY
    
    let navigate = useNavigate()

    let[stock, setStock] = useState()
    let url =  `https://financialmodelingprep.com/api/v3/quote/AAPL,FB?apikey=${key}`
    
    const getStock = async() => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setStock(data)
        } catch(error){
            console.log(error)
        }
        console.log(stock)
    }


    useEffect(() => {
        getStock()
    }, [])
   

    return(
        <div>
            <h1> Name: {stockList[0].name} </h1>
            <p> Symbol: {stockList[0].symbol}</p>
            <p> Change: {stockList[0].change}</p>
            <p> High: {stockList[0].high}</p>
            <p> Low: {stockList[0].low}</p>
            <p> Lastprice: {stockList[0].lastPrice}</p>
            <p> Open: {stockList[0].open}</p>

        </div>
    )
}

export default Stocks;