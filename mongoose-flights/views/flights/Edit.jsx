import React from "react"
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {    
    return(
        <DefaultLayout>
             <h1> Edit Flight</h1>
        <div className="editview">
           
            <form action={`/flights/${props.flights._id}?_method=PUT`} method="POST">
              <label htmlFor='al'> Airline: </label>
              <input type= "text" id="al"  name="airline" defaultValue={props.flights.airline}/> <br /> <br />

              <label htmlFor='ent'> Flight Number: </label>
              <input type= "text" id="ent" name="flightnumber" defaultValue={props.flights.flightnumber}/> <br /> <br />

              <label htmlFor='dpt'> Departure: </label>
              <input type= "text" id="dpt" name="departs" defaultValue={props.flights.departs}/> <br /> <br />


              <input type="submit" />
                
            </form>  
        </div>
        </DefaultLayout>    
    )
}

export default Edit;
