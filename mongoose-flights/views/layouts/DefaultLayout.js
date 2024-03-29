import React from "react";

function DefaultLayout(props){
    return(
       
        <html>
            <head>
               {/* <meta charset="utf-8">
               <meta name="viewport" content="width=device-width, initial-scale=1"> */}
                <title> Mongoose Flight </title>
                
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
                rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
                crossorigin="anonymous"></link>
                
            </head>
                <link rel="stylesheet" href="/css/styles.css" />
                <body>
                   <nav>
                      <ul>
                        {/* <li> <a href="/"> Home </a></li> */}
                        <li className="all-flights"> <a href="/flights"> All Flights </a></li>
                        
                      </ul>
                   </nav> 
                    {/* <h1> Default Layout</h1> */}
                    <div>
                        {props.children}
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" 
                    integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" 
                    crossorigin="anonymous"></script>

                </body>
            
        </html>
    )

}


export default DefaultLayout












