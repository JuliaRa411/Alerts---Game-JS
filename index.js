const input = document.querySelector ("#guess");
const button = document.querySelector ("#btn")
const answer = Math.floor(Math.random()*20+1);

input.addEventListener("keypress", function(e){
    if (e.keyCode ===13){
        play();    
    }
 })


    


 
  
button.addEventListener("click", play)

function play() { 

    const userNumber  = document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber >20){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter number untill 20!',
             
          })
    }
    
    else if (isNaN (userNumber)) {
    
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter only numbers!',
             
          })
        }
    
    else {
        if (userNumber  < answer){
            Swal.fire('Enter higher number')
        }
        else if (userNumber > answer) {
            Swal.fire('Enter lower number ')
                 
              }
        
        
     else{
        Swal.fire({
            title: 'WIN!',
            imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Custom image',
            
          })
     }
     
    }
}
