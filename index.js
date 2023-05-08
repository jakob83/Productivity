table=document.getElementById("tablel")
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
    table.appendChild(tr)
    
})




document.getElementById("calc1").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter1 = 0

    for(i=0;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter1 += value
}
    console.log(counter1+" Seiten")
}
)


