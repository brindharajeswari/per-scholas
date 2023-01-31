let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  let titleEl = document.querySelector('#main-title').textContent = "DOM's Homepage"
  //titleEl.innerHTML = " DOM Toretto's Homepage "  --> another way

  // Part 2

     document.body.style.backgroundColor="pink";

  // Part 3

  const list = document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);

  // const list = document.getElementById("favorite-things")       -->method 2
  // if(list.hasChildNodes()) {
  //   list.removeChild(list.children[5])    
  // }

   //document.getElementById('favorite-things').remove("Starring people down") -->method 3 (removes the entire list)
  
   // var ulEl = document.getElementById('favorite-things')      -----> method 4 (removes option 3- why?)
  // ulEl.removeChild(ulEl.childNodes[5])


  // Part 4

  document.getElementById("quote-title").style.fontSize = "2rem";
  document.getElementById("dom-adventures").style.fontSize = "2rem";

//   var el = document.querySelectorAll(".specialititle");
// for ( var i = 0; i < el.length; i ++ ) {
//     el[i].style.fontSize = "2rem";
// }

  //document.getElementsByClassName("special-title").style.fontSize = "2rem"

  // Part 5

  const li = document.getElementById("past-races") 
  if(li.hasChildNodes()) {      
  li.removeChild(li.children[3])    
 }


  // Part 6

  let x = document.createElement("li")
  //let t = document.createTextNode('Mumbai');
  x.appendChild(document.createTextNode('Mumbai'))    //----> if its line 66, line 67 - x.appendChild(t)
  document.getElementById("past-races").appendChild(x);


 // const liEl = document.getElementById("past-races").appendChild('Mumbai') -->wrong


  // Part 7

  let mainEl = document.querySelector(".main")   //append to the main div
  var div = document.createElement('div')    //creating new div
  div.classList.add('blog-post')  //already in div class(. - removed)
 div.classList.add('purple')   //space (blog-post purple)- another class - so creating new class div
  // div.appendChild(text)
  let h1 = document.createElement('h1')   
  h1.textContent = 'Mumbai'
 div.appendChild(h1)
let p = document.createElement('p')
p.textContent = 'I DROVE THROUGH MUCH CROWDED AND TRAFFIC AREAS'
div.appendChild(p)

mainEl.appendChild(div)

 // var text = document.createTextNode('i drive thru much crowded and traffic areas');
  //div.textContent = 'I drove through much crowded and traffic areas'
  
//div.setAttribute("style","background color:purple;")
 
  


  // Part 8

  const rQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

let quote = document.getElementById("quote-title")
quote.addEventListener('click', function(event) {
rQuote()
})


//   // addEventListener('click', (event) => {}); ----->syntax

//   // onclick = (event) => { };


//<div onclick="document.getElementById('quote-title') = rQuote()"> Quote of the day </div>   ---->method 2



  // Part 9

let blogArr = document.querySelectorAll('.blog-post') 
for (let i=0; i<blogArr.length; i++){
blogArr[i].addEventListener('mouseout', function(evt) {
  blogArr[i].classList.toggle('purple')
  blogArr[i].classList.toggle('red')
  console.log(blogArr)
  })

  blogArr[i].addEventListener('mouseenter', function(evt) {
    blogArr[i].classList.toggle('red')
    blogArr[i].classList.toggle('purple')
})

}

});
