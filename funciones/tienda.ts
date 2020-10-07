
import { diaSemana } from './dias'

//recibo un día
const totalDia = (dia : Array<number>) : number => {
    let total = 0
    for(let venta of dia){
        total += venta
    }
    return total
}

//recibo todos los días de la semana
const totalSemana = (dias : Array<Array<number>>) : number => {
    let totalSemana = 0
    for(let dia of dias){
        let total = totalDia(dia) //hago uso de la función de arriba
        totalSemana += total
    }
    return totalSemana
}

const mediaDia = (dia : Array<number>) : number => {
    let total = totalDia(dia) //uso la función anterior
    return total/dia.length
}

//recibo todos los días de la semana
const analisisVentas = (dias : Array<Array<number>>)  => {
    //considero que será el primer día pero aún no sé la cifra
    let diaSemanaActual = 0
    let diaMasVentas = 0
    let diaMenosVentas = 0 
    let ventasMejorDia : number | undefined = undefined
    let ventasPeorDia : number | undefined = undefined
    
    for(let dia of dias){
        let total = totalDia(dia) //hago uso de la función de arriba
        if(!ventasMejorDia && !ventasPeorDia){ //si ambos están vacíos todavía no tengo comparaciones
            ventasMejorDia = total
            ventasPeorDia = total
        }
        else{
            if(total>ventasMejorDia){
                diaMasVentas = diaSemanaActual
                ventasMejorDia = total
            }
            if(total<ventasPeorDia){
                diaMenosVentas = diaSemanaActual
                ventasPeorDia = total
            }
        }
        diaSemanaActual++
    }

    console.log("El día que más se vendió se obtuvo fue "+diaSemana(diaMasVentas)+" y se obtuvo "+ventasMejorDia)
    console.log("El día que menos se vendió se obtuvo fue "+diaSemana(diaMenosVentas)+" y se obtuvo "+ventasPeorDia)

}

export{
    totalDia,
    totalSemana,
    mediaDia,
    analisisVentas
}