
function menama(a, b) {
    return a - b;
}

alert("Hola que tal? Hoy vamos a ordenar un array de numeros de menor a mayor ")

const numeros = [1, 8, 5, 10, 15, 35, 40,88, 3, 21]

alert(`El array está compuesto por los siguientes números ${numeros}`)

orden = parseInt(prompt(`Presione 1 para ordenar el array de mayor a menor o 2 para ordenar de menor a mayor`))

if (orden == 1 ) {

    numeros.sort(menama)
    alert(`El array ordenado de menor a mayor es ${numeros}`)

}

else if (orden == 2) {

    numeros.sort(menama)
    numeros.reverse()
    alert(`El array ordenado de mayor a menor es ${numeros}`)
}

