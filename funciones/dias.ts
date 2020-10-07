const diaSemana = (index) : string => {
    switch (index) {
        case 0:{
            return "lunes"
        }
        case 1:{
            return "martes"
        }
        case 2:{
            return "miércoles"
        }
        case 3:{
            return "jueves"
        }
        case 4:{
            return "viernes"
        }
        case 5:{
            return "sábado"
        }
        case 6:{
            return "domingo"
        }
    }
}

export { diaSemana }