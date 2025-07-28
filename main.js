options = document.getElementsByTagName('input')
feedback = document.getElementsByClassName("feedback")

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

randnum = getRndInteger(0,4)
console.log(randnum)

options[randnum].setAttribute("id", "correct")


let correct = document.getElementById('correct')
let game0ver = false

for (const option of options) {
    option.addEventListener("click", function(){
        if(game0ver){return}
        game0ver = true
        if (option.checked) {
            if (option === correct) {
                option.parentElement.classList.replace("bg-blue-500", "bg-green-500")
                feedback[1].classList.remove("hidden")
            }
            else{
                option.parentElement.classList.replace("bg-blue-500", "bg-red-500")
                correct.parentElement.classList.replace("bg-blue-500", "bg-green-500")
                feedback[0].classList.remove("hidden")
            }
        }
        
    })
}

// for (const option of options) {
//     option.disabled = true
// }






// options[0].parentElement.classList.replace("bg-blue-500", "bg-red-500");
    // if (correct.checked) {
    //     correct.parentElement.replace("bg-blue-500", "bg-green-500")
    // }
// options[0].parentElement.classList.replace("bg-blue-500", "bg-green-500");


