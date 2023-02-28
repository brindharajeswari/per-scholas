//If a user visits /stocksor clicks "Home" in the navigation bar, 
//they should be directed to a dashboard page. 
//This page should list all of the stocks that the user is tracking, specifically their name and symbol. 
//These stocks should be pulled from the stock-data.js file.

import { Link } from "react-router-dom";
import stocks from "../data.js"
import Home from "./Home";


function Dashboard(){
    return(
        <div className="dashboard">
            <Home />
            This is the Dashboard;
            {stocks.map(stock =>
                <Link to={`/stocks/${stock.symbol}`}>
                    <h2>{stock.name}</h2>
                </Link>
            
            )}
        </div>
    )
}

export default Dashboard;