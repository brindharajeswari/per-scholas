import React from "react";

export default function New(props){
    return(
        <div>
            <h1>New Captain's Log view</h1>
            <form action="/logs" method="POST">
              <label htmlFor='ttl'> Title: </label>
              <input type= "text" id="ttl"  name="title"/> <br /> <br />

              <label htmlFor='ent'> Entry: </label>
              <input type= "text" id="ent" name="entry"/> <br /> <br />

              <label htmlFor='ship'> Ship is Broken: </label>
              <input type= "checkbox" id="ship" name="shipIsBroken"/> <br /> <br />

              <input type="submit" />

            </form>
        </div>
    )
}