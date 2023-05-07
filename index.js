addRowButton = document.getElementById("addRow")
tr1 = document.getElementById("tr1")

addRowButton.addEventListener("click", function addRow(){

    tr = document.createElement("tr")
    for(i=0; i<7; i++){
        td = document.createElement("td")
        td.setAttribute("class", "tds")
        input = document.createElement("input")
        input.setAttribute("class", "input")
        td.appendChild(input)
        tr.appendChild(td)
    }
    document.getElementById("tablel").appendChild(tr)
})




document.getElementById("calc1").addEventListener("click", function(){
    inputs = document.getElementsByClassName("input")[0]
    inputsValue = inputs.value
    
    console.log(inputsValue)

})



