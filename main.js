let options = document.getElementsByTagName('input')
let feedback = document.getElementsByClassName("feedback")

let span = document.getElementById("prize")
const prizes = [
    "iPhone 15 Pro",
    "Apple Watch Series 9",
    "MacBook Air M2",
    "AirPods Pro",
    "PlayStation 5",
]

let prize = prizes[getRndInteger(0,4)]
console.log(prize)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let randnum = getRndInteger(0,4)
console.log(randnum)

options[randnum].setAttribute("id", "correct")


let correct = document.getElementById('correct')
let game0ver = false

for (const option of options) {
    option.addEventListener("click", function(){
        if(game0ver){return}
        game0ver = true
        // option.disabled= true
        if (option.checked) {
            if (option === correct) {
                option.parentElement.classList.replace("bg-blue-500", "bg-green-500")
                span.innerText = prize
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
