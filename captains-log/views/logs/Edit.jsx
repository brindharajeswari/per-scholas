import React from "react"

function Edit(props) {    //http://localhost:8080/fruits/banana/edit
    return(
        <div>
            <h1> Edit Log</h1>
            <form action={`/logs/${props.logs._id}?_method=PUT`} method="POST">
              <label htmlFor='ttl'> Title: </label>
              <input type= "text" id="ttl"  name="title" defaultValue={props.logs.title}/> <br /> <br />

              <label htmlFor='ent'> Entry: </label>
              <input type= "text" id="ent" name="entry" defaultValue={props.logs.entry}/> <br /> <br />

              <label htmlFor='ship'> Ship is Broken: </label>
              <input type= "checkbox" id="ship" name="shipIsBroken" defaultChecked={props.logs.shipIsBroken}/> <br /> <br />
              <br />

              <input type="submit" />
                
            </form>  
        </div>
    )
}

export default Edit;
