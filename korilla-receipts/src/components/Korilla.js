import { useState } from "react";

function Korilla(){

    let[receipts,setReceipts]= useState(receipts)
        const receipt=[ { per8son: 'Karolin', 
                         order: { main: 'Burrito', protein: 'Organic Tofu', rice: 'Purple Rice', sauce: 'Green Crack', toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], drink: 'Korchata', cost: 22 }, 
                         paid: false }, 
                       { person: 'Mark', 
                         order: { main: 'Rice Bowl', protein: 'Ginger Soy Chix', rice: 'Sticky Rice', sauce: 'Korilla', toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], drink: 'Korchata', cost: 19 }, 
                         paid: false }, 
                       { person: 'Matt', 
                         order: { main: 'Salad Bowl', protein: 'Organic Tofu', rice: 'none', sauce: "K'lla", toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], drink: 'Sparkling Blood Orange Soda', cost: 20 }, 
                         paid: true } ];
    

     function handleChange(person){
      //console.log(e.target.value)
      receipt.person === person ? { ...receipt, paid: true } : receipt
                    
       }
                            

    let newReceipt = receipts.map((item) => {
    item.paid === true ? { ...item, completed: !item.completed } : item;
    
        return item.paid ? null : (
            <div className="receiptContainer" 
                 key={item.person}>
                
                <h2> {item.person}</h2>
                <p> <span>Main: </span>{item.order.main}</p>
                <p><span>Protein: </span>{item.order.protein}</p>
                <p><span>Rice: </span>{item.order.rice}</p>
                <p><span>Sauce: </span>{item.order.sauce}</p>
                <p><span>Drink: </span>{item.order.drink}</p>
                <p><span>Cost: </span>{item.order.cost}</p>
                <button onClick={()=>handleChange(item.person)}>paid</button>
            </div>
        );
    })

                   
    return(
        <div>
            <h1>Korilla</h1>
            <div className="receipt"> {newReceipt} </div>
        
        </div>

    );
}

export default Korilla;