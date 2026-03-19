// function shiv(){
//     // alert ("hellow shiv")

//     let Text = document.querySelector('.click')
//     Text.innerHTML =" my name is <i>shiv</i> "

// }


// function shiv() {
//     let value = document.querySelector ('.click')
//     value.style.display="none"
// }







// function hideText() {
//     let value = document.getElementById("text")
//     value.style.display = "none";
// }

// function showText() {
//     document.getElementById("text").style.display = "block";
// }


function hideText() {
    let inter = document.querySelector('.Text')
    .style.display = "none";
}

function showText() {
    document.querySelector('.Text')

    .style.display = "block" ;
}



let count = 0

 function increment() { 
    count++
     document.getElementById("count")
     .innerHTML = count
     }
 

 
     function decrement(){ 
    
      if ( count <=0 ){
        return

      }    
        count--    
      
      
       document.getElementById("count")
    .innerHTML = count
      
 }


 function shiva() {
     let  value =document.querySelector(".contener")
    value.style.backgroundImage = "url(cat.webp)" 
}