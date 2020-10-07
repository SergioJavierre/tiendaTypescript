
import { 
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo 
} from './datos/ventas'

import {
    totalDia,
    totalSemana,
    mediaDia,
    analisisVentas
} from './funciones/tienda'

let dias = [lunes,martes,miercoles,jueves,viernes,sabado,domingo]

analisisVentas(dias)