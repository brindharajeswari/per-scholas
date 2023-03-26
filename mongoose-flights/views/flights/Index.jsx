import React from "react"
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {
   console.log(props);
   const date = new Date;

    return(
     <DefaultLayout>
        <h1>Mongoose Flight</h1>
        <div className="indexview">
            
            <h3>Index View</h3>
            <ul>
                <div >
                {props.flights.map((flight,index) =>
                   <li className="body" key={index}>
                    <a href={`/flights/${flight._id}`}><strong>{flight.airline}</strong>
                    {/* {flight.departs.toISOString().slice(0, 16)} */}
                    {flight.departs < date && <h5 style={{color: 'red'}}><strong>Date:</strong> {`${flight.departs.toISOString().slice(0, 16)}`}</h5>}                    
                    {flight.departs > date && <h5><strong>Date:</strong> {`${flight.departs.toISOString().slice(0, 16)}`}</h5>}
                   </a>
                   </li> 
                )}
                </div>
            </ul>
            <a href="/flights/new"> Add </a>
            <br/>

            <form action="/flights/seed" method="POST">
                <button> SEED </button>
            </form>
            <br/>

            <form action="/flights/clear?_method=DELETE" method="POST">
                <button> clear </button>
            </form>
        </div>
     </DefaultLayout>
    )
}

export default Index;