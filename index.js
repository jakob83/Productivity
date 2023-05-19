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
    
    localStorage.setItem('table', table.innerHTML);
})

document.getElementById("save").addEventListener("click",function(){
        const inputs = document.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
      const inputValue = inputs[i].value;
      localStorage.setItem("value" + i, inputValue);
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
      const storedValue = localStorage.getItem("value" + i);
      if (storedValue) {
        inputs[i].value = storedValue;
      }
    }

  });
   

  

document.getElementById("calc1").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=0;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
    }

    document.getElementById("outcome-book").innerHTML = counter+" Seiten"
})

document.getElementById("calc2").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=1;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
    }

    document.getElementById("outcome-code").innerHTML = counter+" Minuten"
})

document.getElementById("calc3").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=2;i<inputs.length;i+=7){
        value = inputs[i].value
        if(value==="Ja"){
            counter+=1
        }
    }

    document.getElementById("outcome-jjj").innerHTML = counter+" Mal J"
})

document.getElementById("calc4").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=3;i<inputs.length;i+=7){
        value = inputs[i].value
        if(value==="Ja"){
            counter+=1
        }
    }

    document.getElementById("outcome-xxx").innerHTML = counter+" Mal X"
})

document.getElementById("calc5").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=4;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
    }

    document.getElementById("outcome-footy").innerHTML = counter+" Minuten"
})

document.getElementById("calc6").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=5;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
    }

    document.getElementById("outcome-social").innerHTML = counter+" Minuten"
})

document.getElementById("calc7").addEventListener("click", function(){

    inputs = document.getElementsByClassName("input")
    counter = 0

    for(i=6;i<inputs.length;i+=7){
        value = Number(inputs[i].value) 
        counter += value
    }

    document.getElementById("outcome-handy").innerHTML = counter+" Minuten"
    
})

deleteBtn = document.getElementById("delete").addEventListener("click", deleteFunc)

function deleteFunc(){
    inputs = document.getElementsByClassName("input")
    tableRow = document.getElementsByTagName("tr")
    tablel = document.getElementsByClassName("tablel")
    for(i=0; i<7; i++){
        inputs[inputs.length-1].remove()
    }
    tableRow[tableRow.length-1].remove()

    // save table state to localStorage
    localStorage.setItem('table', table.innerHTML);
}



// load table state from localStorage on page load
if (localStorage.getItem('table')) {
    table.innerHTML = localStorage.getItem('table');
}