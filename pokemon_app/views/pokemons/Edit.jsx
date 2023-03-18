import React from "react"

function Edit(props) {    
    return(
        <div>
            <h1> Edit Pokemon</h1>
            <form action={`/pokemons/${props.pokemon.name}?_method=PUT`} method="POST">
                
              <label htmlFor='nme'> Name: </label>
              <input type= "text" id="nme"  name="name" defaultvalue={props.pokemon.name}/> <br /> <br />

              <button> Submit </button>

            </form>  


        </div>
    )
}

export default Edit;
