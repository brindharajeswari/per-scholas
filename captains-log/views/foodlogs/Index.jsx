import React from "react"


function Index(props) {
    return(
        <div>
            <h1> Index view </h1>
            <ul>
                {props.foodlogs.map((item,index) =>
                   <li key={index}>
                    <a href={`/foodlogs/${item._id}`}><strong>{item.title}</strong></a>
                   </li> 
                )}
            </ul>
            <a href="/foodlogs/new"> Add </a>

              <br /> <br />

               <form action="/foodlogs/seed" method="POST">
                   <button> SEED </button>
                </form>

                <br /><br/>

                <form action="/fruits/clear?_method=DELETE" method="POST">
                 <button> clear </button>
                 </form>


            <br /><br/>
        </div>
    )        
}    

export default Index;