
// ALGORITMO PARA CREAR UNA NUEVA TAREA EN EL CALENDARIO 

// 1) Obtener tarea Nueva, parametros para crearla. 
// 2) Dependiendo de la fecha de la tarea buscar cuando se mostrara en el calendario, si es mas grande o mas chico, etc.
// 3) A partir de la urgencia, que cada una tenga un color, ej, la 1 azul, la 5 roja. 


const tareaNueva = prompt('Crear nueva tarea');

function NuevaTarea(dia, hora, urgencia) {
    this.dia = dia
        this.hora = hora
        this.urgencia = urgencia
}
    let dia = prompt('Ingrese la fecha ');
    let hora = prompt('Hora de la tarea');
    let urgencia = parseInt (prompt('Que tan urgente es tu tarea del 1 al 5, siendo 5 lo mas urgente'));
    {if (urgencia ==1 ){
        console.log("Color GREEN");}
    else if ( urgencia == 2){
        console.log ("color YELLOW")
    }
    else if ( urgencia == 3){
        console.log ("color ORANGE")
    }
    else if ( urgencia == 4 ){
        console.log ("color RED")
    }
    else if ( urgencia == 5){
        console.log ("color BLACK")
    }
    else{
        console.log ('No has ingresado una tarea')
    }
}

    if (tareaNueva && dia && hora && urgencia) {
        let tareaCreada = new NuevaTarea(dia, hora, urgencia);
        console.log("Tu tarea " + tareaNueva + " para el " + tareaCreada.dia + ", a las " + tareaCreada.hora + "hs, con urgencia nivel " + tareaCreada.urgencia + ', ha sido creada correctamente');
    }
    else {
        alert("Por favor, ingresar todos los datos para crear tarea.")
    }
