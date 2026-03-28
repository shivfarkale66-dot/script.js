function shiv(){
    // alert ("hellow shiv")

    let Text = document.querySelector('.click')
    Text.innerHTML =" my name is <i>shiv</i> "

}


function shiv() {
    let value = document.querySelector ('.click')
    value.style.display="none"
}







function hideText() {
    let value = document.getElementById("text")
    value.style.display = "none";
}

function showText() {
    document.getElementById("text").style.display = "block";
}


function hideText() {
    let inter = document.querySelector('.Text')
    .style.display = "none";
}

// function showText() {
//     document.querySelector('.Text')

//     .style.display = "block" ;
// }



// let count = 0

//  function increment() { 
//     count++
//      document.getElementById("count")
//      .innerHTML = count
//      }
 

 
//      function decrement(){ 
    
//       if ( count <=0 ){
//         return

//       }    
//         count--    
      
      
//        document.getElementById("count")
//     .innerHTML = count
      
//  }


//  function shiva() {
//      let  value =document.querySelector(".contener")
//     value.style.backgroundImage = "url(cat.webp)" 
// }

function Red() {

    document.querySelector('.Box').style.backgroundColor = "red " ;
}

function Green() {

    document.querySelector('.Box').style.backgroundColor = "green " ;
}
function Blue(){

    document.querySelector('.Box').style.backgroundColor = "blue " ;
}

// question two 

let count = 0 ;
function reset(){
    count = 0 ;

    document.querySelector('.Box').innerHTML= "count";
}


// amzon watch list creat

function shirt() {
    document.querySelector('.inerdiv')
   .style.backgroundImage = "url(imgs/outfi.jpg)"

}
function menfation() {
    document.querySelector('.inerdiv')
   .style.backgroundImage = "url(imgs/menout.jpg)"

}
function shoes() {
    document.querySelector('.inerdiv')
   .style.backgroundImage = "url(imgs/sneakers.jpg)"

}
function watch() {
    document.querySelector('.inerdiv')
   .style.backgroundImage = "url(imgs/watch.jpg)"

}


// queston four

function outputbox() {
   let text = document.getElementById ("inputbox").value;
   document.getElementById("output").innerText = text ;

}

// question five


function changecolor() {
    let color = document.getElementById("bginputbox").value ;
    
    document.getElementById("changecolor")
    .style.backgroundColor = color ;
}


// arrow method 


let app = (a) => {
    
    let b = 6
    return a*b

}
// console.log( app(5))

// Eval methhod



function shiv (){
    // let username = Number (prompt("inter you number"))
    // let name =  Number (prompt("inter your number"))
    // alert (username + name)
let age = prompt ( "inter your color")
if ( age>=18){
    alert("you can vote")

}
else{
    alert("not vote ")
}

}
shiv()
 function papa(){

    
 }




