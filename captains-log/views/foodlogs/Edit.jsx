import React from "react";

export default function New(props){
    return(
        <div>
            <h1>Edit view</h1>
            <form action={`/foodlogs/${props.foodlogs._id}?_method=PUT`} method="POST">
              <label htmlFor='ttl'> Title: </label>
              <input type= "text" id="ttl"  name="title" defaultValue={props.foodlogs.title}/> <br /> <br />

              <label htmlFor='ing'> Ingredients: </label>
              <input type= "text" id="ing" name="ingredients" defaultValue={props.foodlogs.ingredients}/> <br /> <br />

              <label htmlFor='foo'> Food is Healthy: </label>
              <input type= "checkbox" id="foo" name="isHealthy" defaultChecked={props.foodlogs.isHealthy}/> <br /> <br />

              <input type="submit" />

            </form>
        </div>
    )
}