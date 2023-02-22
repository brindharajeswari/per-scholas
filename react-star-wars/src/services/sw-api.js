
export async function getAllStarship(){

    let url = 'http://swapi.dev/api/starships/';
    //console.log('hello');

    
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)

    
    return data

}


