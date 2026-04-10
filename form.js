 let sumitbtn = ()=> {

// input box 
    let name =  document.getElementById('username').value.trim()
      let num = document.getElementById('usernum').value.trim()
        let email =     document.getElementById('useremail').value.trim()
          let pass =       document.getElementById('userpass').value.trim()
               let cpass =      document.getElementById('usercpass').value.trim()




    // erro 
     let erroname =  document.getElementById('errname')
          let errnum =  document.getElementById('errnum')
     let erremail =  document.getElementById('erremail')
          let errpass =  document.getElementById('errpass')
               let apass =  document.getElementById('errcpass')




      if (name == "" ){
        erroname.innerHTML = "please inter name "
         return false 
      }
         if (num == "" ){
        errnum.innerHTML = "please inter name "
         return false 
      }
        if (email == "" ){
        erremail.innerHTML = "please inter name "
         return false 
      }
        if (pass == "" ){
        errpass.innerHTML = "please inter name "
         return false 
      }
       
        if (cpass == "" ){
    
            apass.innerHTML = "please inter name "
         return false 
      }
       
       



// let box = document.querySelector(".box");

// box.addEventListener("click", function () {
//   box.style.left = "200px";   // right side move
// });
       





 }
