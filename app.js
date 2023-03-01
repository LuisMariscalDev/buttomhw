let contador = 0
const parrafo = document.getElementById("demo")
const boton_dis = document.getElementById("bt-1")
const boton_rei = document.getElementById("bt-2")
const boton_aum = document.getElementById("bt-3")

console.log(parrafo);
console.log(boton_dis);
console.log(boton_aum);
console.log(boton_rei);

boton_dis.addEventListener("click", contador_dis)
boton_aum.addEventListener("click", contador_aum)
boton_rei.addEventListener("click", contador_rei)

function contador_dis(){
    --contador
    return(parrafo.innerText = contador);
}

function contador_aum(){
    ++contador
    return(parrafo.innerHTML = contador)
}

function contador_rei(){
    contador = 0
    return(parrafo.innerHTML = contador)
}

function colorControlador(value){
    let resultado
    if(value > 0){
        resultado = parrafo.style.color = "green"
    }
    if(value === 0){
        resultado = parrafo.style.color = "black"
    }
    if(value < 0){
        resultado = parrafo.style.color = "red"
    }
    return resultado
}