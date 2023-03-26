import React from "react"
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
    return(
        <DefaultLayout>
            <h1>Show view</h1>
          <div className="show-view">
            

            {props.flights.airline}
            <br/>
            {props.flights.flightnumber}
            <br/>
            {props.flights.departs.toISOString().slice(0, 16)}
            <br/>
            <br/>
            {/* {props.flights.destination.arrival.toISOString().slice(0, 16)}
            <br/> */}
            {/* {props.flights.destination.airport} */}

            {
                        props.flights.destinations.length ?
                        <>
                            <div>Destinations:</div>
                            <p>{props.flights.destinations.map((destination, i) => 
                                <div key={i} className="comm">
                                    <div>{destination.arrival.toISOString().slice(0, 16)}</div>
                                    <div>{destination.airport}</div>
                                    {/* <form action={`/posts/${props.flights._id}/destinations/${destination._id}?_method=DELETE`} method="POST"><input type="submit" value="X"/></form>
                                    <a href={`/posts/${props.flights._id}/destinations/${comment._id}`}>+</a> */}
                                </div>
                            )}</p>
                            <br/><br/>
                        </>
                        : ''
                    }


                    <details>
                        <summary style={{ opacity: '.5' }}>Destination:</summary>
                        <form action={`/flights/${props.flights._id}`} method="POST">
                        <label htmlFor='apt'> Airport: </label>
              <select class="form-select" name='airport'>
                <option selected> Select Airport</option>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
              </select>
              <br />
                            

                            <label htmlFor='avl'> Arrival: </label>
              <input type= "datetime-local" id="avl" name="arrival" /> <br /> <br />

              
              <button>Destination</button>
                        </form>


                    </details>

                    <br/>

            <a href={`/flights/${props.flights._id}/edit`}> Edit</a>


            <br></br>
            <br />

            <form action={`/flights/${props.flights._id}?_method=DELETE`} method="POST">   
                 <button> Delete </button>
            </form>

            <br />

            <a href="/flights">Back</a>
         </div>      


        </DefaultLayout>
    )
}

export default Show;