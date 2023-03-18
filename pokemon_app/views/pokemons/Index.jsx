import React from "react"


function Index(props) {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };


    return(
        <div style={myStyle}>
            <h1> Index view </h1>
            <h2> See all the pokemon </h2>

            <ul>
                {props.pokemons.map((pokemon,index) =>
                   <li key={index}>
                    <a href={`/pokemons/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
                   </li> 
                )}
            </ul>
          <a href="/pokemons/new"> Add </a>

          <br /><br/>

            <form action="/pokemons/seed" method="POST">
                <button> SEED </button>
            </form>

            <br /><br/>

            <form action="/pokemons/clear?_method=DELETE" method="POST">
                <button> clear </button>
            </form>
        </div>
    )
}

export default Index;