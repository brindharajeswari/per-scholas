import React from "react"


function Index(props) {
    return(
        <div>
            <h1> Index view </h1>
            <ul>
                {props.logs.map((item,index) =>
                   <li key={index}>
                    <a href={`/logs/${item._id}`}><strong>{item.title}</strong></a>
                   </li> 
                )}
            </ul>
            <a href="/logs/new"> Add </a>

            <br /><br/>

               <form action="/logs/seed" method="POST">
               <button> SEED </button>
              </form>

            <br /><br/>

            <form action="/logs/clear?_method=DELETE" method="POST">
                  <button> clear </button>
               </form>
        </div>
    )
}

export default Index;