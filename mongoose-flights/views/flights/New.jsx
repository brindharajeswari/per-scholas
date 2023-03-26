import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function New(props) {
    const date = new Date();
    console.log('date');
    // let day = date.getDate();
    // let month = date.getMonth();
    // let year = date.getFullYear();
    //let today = `${month}/${day}/${year}`

    // const now = newDate();
    // const offset= now.getTimezoneOffset();
    // const adjusted = new Date(now.getTime() - offset)

    // const newYear = adjusted.getFullYear()+1;

    let today = new Date();  // Get today's date
    

    //let yearTest = adjusted.setFullYear(adjusted.getFullYear() + 1);
    //let dayTest = adjusted.setDate(adjusted.getDate() + 2);

  //  const formattedDate = adjusted.toLocaleDateString();
  //  console.log(formattedDate);
  //const newDate = new Date(adjusted);
  //const newDate1 = new Date(yearTest);
  // newDate.setDate(newYear)
   //newDate1.setDate(yearTest);
    return (
      <DefaultLayout>
        <h1> New Flight</h1>
        <div className='newview'>
          
            <form action="/flights" method="POST">
                
              <label htmlFor='al'> Airline: </label>
              {/* <input type= "text" id="al"  name="airline"/> <br /> <br /> */}
              <select class="form-select" name='airline'>
                <option selected> Select Airline </option>
                <option value="American">American</option>
                <option value="Southwest">Southwest</option>
                <option value="United">United</option>
              </select>
              <br/>

              <label htmlFor='apt'> Airport: </label>
              <select class="form-select" name='airport'>
                <option selected> Select Airport</option>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
              </select>
              <br/>

              {/* <label htmlFor='arl'> Arrival: </label>
              <input type= "text" id="arl" name="arrival" value={date}/> <br /> <br /> */}


              <label htmlFor='flt'> Flight Number: </label>
              <input type= "text" id="flt" name="flightnumber"/> <br /> <br />

              <label htmlFor='dpt'> Departure: </label>
              <input type= "datetime-local" id="dpt" name="departs" value={props.departsDate}/> <br /> <br />

              <button> Submit </button>

            </form>  

        </div>
        </DefaultLayout>  
    );
}

export default New;