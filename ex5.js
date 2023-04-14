/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */

function agua_necesaria(condicion, km) {
    /*let agua_por_km =*/
    let litros_totales 

    if (condicion == 'buena') {
        agua_por_km = 0.5
    }

    if (condicion == 'regular') {
        agua_por_km = 0.6
    }

    if (condicion == 'mala') {
        agua_por_km = 0.7
    }

    return agua_por_km * km

}

let condicion = 'mala'
let km = 10
let agua = agua_necesaria(condicion, km)
console.log("Este ciclista deberia necesita:", agua + " litros de agua en total")