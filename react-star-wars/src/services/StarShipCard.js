import { useState, useEffect } from "react";
import { getAllStarship } from "./sw-api";

function StarShipCard(){

    let[starship, setStarship] = useState([]);
    

  useEffect(() =>{
   const farmatdata = async() => {
    const data=await getAllStarship()
    console.log(data)
    setStarship(data.results)
   }
   farmatdata()
  },[])

//console.log('starship' + starship)

//setStarship(ship)

    return(
        
        <div className="cardbox">
        {starship.map((element,index) => ( 
        <div className="card" key = {index}>
        <h1 >{element.name}</h1> 
        </div>
    
        ))
        }
        </div>
    );
}

export default StarShipCard;