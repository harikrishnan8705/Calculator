var display = document.getElementById("display")

function appendtodisplay(input){
    display.value += input
}
function cleardisplay(){
   display.value = ""
}
function calculate(){
   try{
    display.value = eval(display.value)
   }
   catch(error){
    display.value = "Error"
   }
}
function cleareach(){
   display.value = display.value.slice(0,-1)
}
