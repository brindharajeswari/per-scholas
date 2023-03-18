import React from "react";


function Show(props) {
    return(
        <div>
            <h1>Show view</h1>
               {props.foodlogs.title}
               <br/>
               <br/>
               {props.foodlogs.ingredients}
                <br/>
               <p>The food {props.foodlogs.isHealthy ? ' is healthy' : ' is NOT healthy'}</p>
                
               <p>{props.foodlogs.createdAt.toString()}</p>  
               <br/>
               <br />

               <a href={`/foodlogs/${props.foodlogs._id}/edit`}> Edit</a>
               <br/> <br/>

               <form action={`/foodlogs/${props.foodlogs._id}?_method=DELETE`} method="POST">   

                  <button> Delete </button>
                  <br/>

               </form>

               <a href ={`/foodlogs/${props.foodlogs._id}`}></a>

                   <br/>

                <a href="/foodlogs">Back</a>
                <br/> <br/>

        </div>
    )
}    

export default Show;