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
    counter = 0

    for(i=0;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
}
    console.log(counter+" Seiten")
}
)


document.getElementById("calc2").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=1;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
}
    console.log(counter+" Minuten")
}
)

document.getElementById("calc3").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")

    counter = 0
    for(i=2;i<inputs.length;i+=7){
        value = inputs[i].value
        if(value==="Ja"){
            counter+=1
        }
    }
        console.log(counter+" Mal verfehlt")
}
)

document.getElementById("calc4").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")

    counter = 0
    for(i=3;i<inputs.length;i+=7){
        value = inputs[i].value
        if(value==="Ja"){
            counter+=1
        }
    }
        console.log(counter+" Mal X")
}
)

document.getElementById("calc5").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=4;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
}
    console.log(counter+" Minuten")
}
)

document.getElementById("calc6").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=5;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
}
    console.log(counter+" Minuten")
}
)

document.getElementById("calc7").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=6;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
}
    console.log(counter+" Minuten")
}
)

/*lost*/