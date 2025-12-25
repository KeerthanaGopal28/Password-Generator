let char = [ "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")",
  "`","~","-","_","=","+",
  "[","]","{","}","\\","|",
  ";",":","'","\"",
  ",","<",".",">","/","?"]


let FirstPasswordEl = document.getElementById("FirstPassword")
let SecondPassword = document.getElementById("SecondPassword")
function GeneratePassword() {
    let generatedPassword1 = ""
    let generatedPassword2 = ""
    let IndexG = 0
    const num1El = document.getElementById("num1").value
    for(let i=0;i<num1El;i++){
        IndexG = Math.floor(Math.random()*char.length)
        generatedPassword1+=char[IndexG]
    }
    FirstPasswordEl.textContent = generatedPassword1
    for(let i=0;i<num1El;i++){
        IndexG = Math.floor(Math.random()*char.length)
        generatedPassword2+=char[IndexG]
    }
    SecondPassword.textContent = generatedPassword2
    generatedPassword1 = 0
    generatedPassword2 = 0
}
