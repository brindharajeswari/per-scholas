import React from 'react'

function New() {
    return (
        <div>
          <h1> New Pokemon</h1>
            <form action="/pokemons" method="POST">
                
              <label htmlFor='nme'> Pokemon Name: </label>
              <input type= "text" id="nme"  name="name"/> <br /> <br />

              <label htmlFor='nme'> Image URL: </label><br />
              <input type= "text" id="img" name="img"/> <br /> <br />

              <button> Submit </button>

            </form>  

        </div>
    );
}

export default New;