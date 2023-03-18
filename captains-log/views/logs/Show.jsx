import React from "react"


function Show(props) {
    return(
        <div>
            <h1> Show view </h1>
            {props.logs.title}
            <br/>
            {props.logs.entry}
            <br/>
            {/* {props.logs.shipIsBroken.toString()} */}
            <p>The ship {props.logs.shipIsBroken ? ' is broken' : ' is NOT broken'}</p>

            <p>{props.logs.createdAt.toString()}</p>  
            {/* time stamp */}

            <a href={`/logs/${props.logs._id}/edit`}> Edit</a>

            <br/> <br/>

            <form action={`/logs/${props.logs._id}?_method=DELETE`} method="POST">   
            
            <button> Delete </button>
            <br/>

            </form>

            <a href ={`/logs/${props.logs._id}`}></a>

            <br/>

            <a href="/logs">Back</a>

        </div>
    )
}

export default Show;