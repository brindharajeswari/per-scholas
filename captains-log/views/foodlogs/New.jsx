import React from "react";

export default function New(props){
    return(
        <div>
            <h1>New FoodLog view</h1>
            <form action="/foodlogs" method="POST">
              <label htmlFor='ttl'> Title: </label>
              <input type= "text" id="ttl"  name="title"/> <br /> <br />

              <label htmlFor='ing'> Ingredients: </label>
              <input type= "text" id="ing" name="ingredients"/> <br /> <br />

              <label htmlFor='foo'> Food is Healthy: </label>
              <input type= "checkbox" id="foo" name="isHealthy"/> <br /> <br />

              <input type="submit" />

            </form>
        </div>
    )
}