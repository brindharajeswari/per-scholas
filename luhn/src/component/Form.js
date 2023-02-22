import { useEffect, useState } from "react";

function Form(){
    let [card, setCard] = useState('');
    let [log, setLog] = useState('');
    let [double, setDouble] = useState('');
    let [sum, setSum] = useState('');
    let [valid, setValid] = useState('');
    
    
    useEffect(validate,[card])

    function handleChange(e){
        setCard(e.target.value)
    }

    function validate(){
        let reverse = card.split('').reverse().join('') //reversing num
        let str = "";
        let total = 0;
        if(reverse.length>0){
            for(let i=0; i<reverse.length; i++){
                i%2===0 ? (str += reverse[i]) : (str += Number(reverse[i])*2)

            }
        }
    
        setLog(reverse)
        setDouble(str)
    
        for(let i in str){
            total += Number(str[i])
        }
        setSum(total)
        total === 0 ? setValid('Enter credit card number') : total%10===0 ? setValid('card is valid') : setValid('invalid card')
    }
    
    
    return(
        <>
        <h1> The Luhn Algorithm</h1>
        <input value={card} onChange={handleChange}></input>
        <div> reverse {log} </div> 
        <div> double {double}</div>
        <div> sum {sum}</div>
        <div> {valid}</div>
        </>
    )
}

export default Form;