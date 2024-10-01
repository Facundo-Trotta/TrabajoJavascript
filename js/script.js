//console.log que le da el bienvenido a la persona con function
function saludar (nombre){
    alert ("Bienvenido y encantado de conocerte "+nombre)
    console.log ("Bienvenido y encantado de conocerte "+nombre)
}
let nombreUsuario = prompt("Nombre y apellido?")
saludar (nombreUsuario)


//console.log que pregunta sobre la comsion que estas
let comision = prompt ("Hola! ¿podria informarnos en que numero de comision estas?")
let division = prompt ("ahora, queriamos saber que contenido de coderhouse es el que estas cursando? ")
const academia = ("coderHouse")
alert ("Bienvindo!, estas en la comision " +comision+ " de la academia " +academia+" cursando "+division)
console.log ("Bienvindo!, estas en la comision " +comision+ " de la academia " +academia+" cursando "+division)
alert ("Mucho gusto espero que difrutes de nuestro test sobre un juego llamado THE LAST OF US sobre cuanto sabes acerca de este juegazo estrenado el 14 de julio del 2003 donde se buscara mostrar todo los codigos aprendidos, usados de distintas formas pero buscando que se utilicen para el fin de hacer el test")

console.log ("Mucho gusto espero que difrutes de nuestro test sobre un juego llamado THE LAST OF US sobre cuanto sabes acerca de este juegazo estrenado el 14 de julio del 2003 donde se buscara mostrar todo los codigos aprendidos, usados de distintas formas pero buscando que se utilicen para el fin de hacer el test")



//primer test con switch
let ruido = prompt("como primera pregunta ¿queria saber que harias si escucharas un chasqueador acercandose? = 1 (abrir fuego sobre el) 2 (salir corriendo por mi vida) 3(haria ruido con cualquier cosa en la mano y me retiraria lentamente)")

switch (ruido) {
    case "1":
        alert("Mal hecho, porque podras hacer que todo los infectado cerca de la zona vayan a tu localidad donde aveces uno puedo escapar pero no en todo los casos porque no se saben cuantos ni que tan cerca estan y puede ser letal")
        console.log ("Mal hecho, porque podras hacer que todo los infectado cerca de la zona vayan a tu localidad donde aveces uno puedo escapar pero no en todo los casos porque no se saben cuantos ni que tan cerca estan y puede ser letal")
        break;
    
    case "2":
        alert("Mal hecho, porque aunque los chasqueadores no tenga vista ellos tienen uno de sus sentidos mucho mas desarrollados que es el escuchar y la ecolocalizacion")
        console.log ("Mal hecho, porque aunque los chasqueadores no tenga vista ellos tienen uno de sus sentidos mucho mas desarrollados que es el escuchar y la ecolocalizacion ")
        break;

    case "3":
        alert("Bien hecho, tirando un objeto que no haga tanto ruido puedes cambiar las trayectorias de los chasqueadores y pasar de ellos")
        console.log ("Bien hecho, tirando un objeto que no haga tanto ruido puedes cambiar las trayectorias de los chasqueadores y pasar de ellos ")
        break;

    default:
        alert("introdujiste una opcion no valida")
        console.log ("introdujiste una opcion no valida")
        break;
}

//segundo test con if- else y else if 
let aire = prompt ("como segunda pregunta ¿si tu camino contiene esporas las pasarias sin tener una mascara de gas ?= 1(si) 2(no)")
if (aire == 1 ){
    alert ("Mal hecho, porque las esporas aunque parezcan inofencivas harian que te infectes con el virus")
    console.log ("Mal hecho, porque las esporas aunque parezcan inofencivas harian que te infectes con el virus")
}else if (aire == 2 ){
    alert ("Bien hecho, porque las esporas podrian hacer que te infectes con el virus")
    console.log ("Bien hecho, porque las esporas podrian hacer que te infectes con el virus")

}

//tercer test con switch case con  parseInt
let menu = parseInt(prompt("Tercera pregunta ¿como se llama el virus del hongo que da comienzo a la pandemia mundial? 1(Cordycep) 2(peste negra) 3(gripe A)"))

switch (menu) {
    case 1:
        alert ("Correcto se llama Cordycep")
      console.log ("Correcto se llama Cordycep")
      break
    case 2:
        alert ("Incorrecto, se llama Cordycep")
        console.log ("Incorrecto, se llama Cordycep")
        break
    case 3:
        alert ("Incorrecto, se llama Cordycep")
        console.log ("Incorrecto, se llama Cordycep")
        break 

    default:
        alert("introdujiste una opcion no valida")
        console.log ("introdujiste una opcion no valida")
        break; 
}

//cuarto test usando arrys
const personajesN = [" Joel","Ellie","Tess","Sarah","tommy", "bill",]
let personajes = prompt("¿quien es el personaje mas querido de la fraquin segun vos? joel, ellie, tess, sarah, tommy, bill")
console.log("quien es el personaje mas querido de la fraquin segun vos"+personajesN.join(" - "))

switch (personajes) {
    case "joel":
    alert ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    console.log ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    break

    case "ellie":
    alert ("Correcto el personaje mas amado por escandalo en la fraquincia es Ellie")
    console.log ("Correcto el personaje mas amado por escandalo en la fraquincia es Ellie")
    break

    case "tess":
    alert ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    console.log ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    break

    case "sarah":
    alert ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    console.log ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    break

    case "tommy":
    alert ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    console.log ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    break

    case "bill":
    alert ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    console.log ("Incorrecto, el personaje mas amado por escandalo en la fraquincia es Ellie")
    break

    default:
        alert("introdujiste una opcion no valida")
        console.log ("introdujiste una opcion no valida")
        break; 
}



//quinto test 
let hermanos = prompt("quinta pregunta ¿como se llamaba la pareja de hermanos que se encuentran ellie y joel en su viaje? 1(David y Jacob) 2(Henry y Sam) 3(Tommy y Brian)")

switch (hermanos) {
    case "1":
        alert("Incorrecto, se llamaban Henry y Sam")
        console.log ("Incorrecto, se llamaban Henry y Sam")
        break;
    
    case "2":
        alert("Correcto se llamaban Henry y Sam")
        console.log ("Correcto se llamaban Henry y Sam")
        break;
    
    case "3":
        alert("Incorrecto, se llamaban Henry y Sam")
        console.log ("Incorrecto, se llamaban Henry y Sam")
        break;


    default:
        alert("introdujiste una opcion no valida")
        console.log ("introdujiste una opcion no valida")
        break;
}

//sexto test 
let bills = prompt("¿como se llamaba la ciudad de bill? 1(Boston) 2(Massachusetts) 3(Lincoln)")

switch (bills) {
    case "1":
        alert("Incorrecto, se llama Lincoln ")
        console.log ("Incorrecto, se llama Lincoln ")
        break;
    
    case "2":
        alert("Incorrecto, se llama Lincoln ")
        console.log ("Incorrecto, se llama Lincoln ")
        break;

    case "3":
        alert("Bien hecho, se llama Lincoln")
        console.log ("Bien hecho, se llama Lincoln")
        break;

    default:
        alert("introdujiste una opcion no valida")
        console.log ("introdujiste una opcion no valida")
        break;
}

//septimo tets
alert ("muchos se preguntaran cuantos supervivientes sobrevivieron del virus del Cordycep ")
const calculadoraDel2 = primerNumero => primerNumero*4
    alert (+calculadoraDel2(10)+"% nomas logro sobrevivir del virus del Cordicep pero se fue disminuyendo mas por temas como la comida se escasea, el encontrar agua potable ,las esporas, la matanza entre dominios entre humanos y etc")

//continuara...
alert ("espero que hayan disfrutado de este pequeño y sencillo test")
console.log ("espero que hayan disfrutado de este pequeño y sencillo test")
