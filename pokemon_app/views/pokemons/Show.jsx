import React from "react"


function Show(props) {
    return(
        <div>
            <h1>Show view</h1>

            <p>The <strong>{props.pokemon.name}</strong> </p>
            <img src={`${props.pokemon.img}.jpg`} alt={props.pokemon.name} />
           

            <a href={`/pokemons/${props.pokemon._id}/edit`}> Edit</a>
            <br></br>
            <br />

            <form action={`/pokemons/${props.pokemon._id}?_method=DELETE`} method="POST">   
                 <button> Delete </button>
            </form>

            <br />

            <a href="/pokemons">Back</a>
        </div>
    )
}

export default Show;