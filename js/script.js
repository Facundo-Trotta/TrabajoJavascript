//console.log que le da el bienvenido a la persona con funsiones
function saludar (nombre){
    console.log ("Bienvenido y encantado de conocerte "+nombre)
}
let nombreUsuario = prompt("Nombre y apellido?")
saludar (nombreUsuario)


//console.log que pregunta sobre la comsion que estas
let comision = prompt ("Hola! ¿podria informarnos en que numero de comision estas?")
let division = prompt ("ahora, queriamos saber que contenido de coderhouse es el que estas cursando? ")
const academia = ("coderHouse")
console.log ("Bienvindo!, estas en la comision " +comision+ " de la academia " +academia+" cursando "+division)
console.log ("en nuestra comision yo te estare invitando a participar de nuestro test donde se buscara mostrar lo aprendido y que se teste todo tipo de herramientas asi que ojala que disfrutes mi trabajo")



//primer test con switch
let tiempo = prompt("Bienvenido has entrado a un mini test sobre la cual tu puedes elejir unas opciones de que harias cuando te enfermas: (ir a un medico) , (tratar los malestares solo) o (dejar que te cures con el tiempo) ");

switch (tiempo) {
    case "ir a un medico":
        alert("Bien Hecho!! Aveces el querer curarte solo podria traer muchos riesgos a tu salud");
        break;
    
    case "tratar los malestares solo":
        alert("Mal porque aun no sabes lo que tienes y aveces eso podria o traer repercuciones que con el tiempo pasando te podria hacer peor, por eso es mejor ir al medico y consultar con un especialista con el tema");
        break;

    case "dejar que te cures con el tiempo":
        alert("Mal porque aun no sabes lo que tienes y aveces eso podria o traer repercuciones que con el tiempo pasando te podria hacer peor, por eso es mejor ir al medico y consultar con un especialista con el tema");
        break;

    default:
        alert("introdujiste una opcion no valida")
        break;
}

//segundo test con if- else y else if
let canilla = prompt ("como segunda pregunta, queria saber si sabias del desperdicio de agua y charcos de agua estancada que hace que en estos veranos se padezca las oleadas de mosquitos,¿vos dejas (abierta) o (cerrada) la canilla de agua?")
if (canilla == "cerrada"){
    console.log ("Felicidades! no solo cuidas al medio ambiente sino que tambien tienes consiencia por los demas y no solo en uno")
}else if (canilla == "abierta"){
    console.log ("Mal aveces tenemos que tener conciencia en que cuidar el agua no es solo pensar en uno sino que tambien en los demas que tambien en los demas")
}

//tercer test con switch case
let menu = parseInt(prompt("Ingresa uno de los tres numeros para saber tu opinion acerca del test!! ingrese la opcion 1 si te va gustando el test, ingrese 2 si no te gusta el test, ingrese 3 si solo quieres seguir para ver si al final te interesa  "))

switch (menu) {
    case 1:
      console.log ("Gracias, espero que sigas disfrutando de este pequeño test que siga mejorando.")
      break
    case 2:
        console.log ("Gracias por tu opinion sincera y que esto no decaiga :D que aun queda mucho por mejorar")
        break
    case 3:
        console.log ("Gracias por darme este chanse de seguir mostrandote y mejorando este test ")
        break   
}

//cuarto test 
