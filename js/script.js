/*camperas*/
class Campera {
    static id = 0
    constructor (modelo, color, precio) {
        this.id = ++Campera.id
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
}
const campera1 =new Campera ("campera deportiva", "azul", 35000)
const campera2 =new Campera ("campera rompe viento", "azul oscuro", 35000)
const campera3 =new Campera ("camperon", "negra", 35000)
const campera4 =new Campera ("campera Bl", "negra", 35000)
const campera5 =new Campera ("campera de cuero", "negra", 35000)
const campera6 =new Campera ("campera deportiva", "negra", 35000)
const campera7 =new Campera ("campera puma", "negra", 35000)
const campera8 =new Campera ("campera de cuero", "marron", 35000)

console.log(campera1, campera2, campera3, campera4, campera5, campera6, campera7, campera8)

/*zapatillas*/
class Zapatillas {
    static id = 0
    constructor (modelo, color, precio) {
        this.id = ++Zapatillas.id
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
}

const zapatillas1 =new Zapatillas ("adidas", "blancas", 65000)
const zapatillas2 =new Zapatillas ("dcshoecousa", "blancas y marron", 75000)
const zapatillas3 =new Zapatillas ("puma", "tricolor", 65000)
const zapatillas4 =new Zapatillas ("zapas de cuero", "negro", 65000)
const zapatillas5 =new Zapatillas ("deportivas", "negras", 55000)
const zapatillas6 =new Zapatillas ("puma", "rosita", 65000)
const zapatillas7 =new Zapatillas ("grand funk", "blanca", 55000)
const zapatillas8 =new Zapatillas ("over the sea", "blanca", 65000)

/*remeras*/
class Remeras {
    static id = 0
    constructor (modelo, color, precio) {
        this.id = ++Zapatillas.id
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
} 
const remeras1 =new Remeras ("lisas de color", "variado", 8000)
const remeras2 =new Remeras ("nike", "blanca", 8000)
const remeras3 =new Remeras ("fredes", "verde", 8000)
const remeras4 =new Remeras ("camiseta de argentina", "negra", 8000)
const remeras5 =new Remeras ("remera lisa blanca", "blanca", 5000)
const remeras6 =new Remeras ("remera de los rolling stones", "blanca", 5000)
const remeras7 =new Remeras ("diseño de flores", "variado", 5000)
const remeras8 =new Remeras ("lilo y stitch", "blanca", 5000)

/*pantalones*/
class Pantalones {
    static id = 0
    constructor (modelo, color, precio) {
        this.id = ++Zapatillas.id
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
} 
const pantalones1 =new Pantalones ("jogger", "negro", 9000)
const pantalones2 =new Pantalones ("jogger", "crema", 9000)
const pantalones3 =new Pantalones ("jogger", "azul", 9000)
const pantalones4 =new Pantalones ("jogger", "mostaza", 9000)
const pantalones5 =new Pantalones ("jogger", "negro", 7000)
const pantalones6 =new Pantalones ("jeans", "azul", 7000)
const pantalones7 =new Pantalones ("jeans", "negra", 7000)
const pantalones8 =new Pantalones ("jogger", "blanca", 7000)

//buzos
class Buzos {
    static id = 0
    constructor (modelo, color, precio) {
        this.id = ++Zapatillas.id
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
} 
const buzos1 =new Buzos ("adidas", "negro", 16000)
const buzos2 =new Buzos ("nike", "negro", 16000)
const buzos3 =new Buzos ("con el logo de marshmello", "", 16000)
const buzos4 =new Buzos ("norafight", "negro", 16000)
const buzos5 =new Buzos ("mickey mouses", "negro", 16000)
const buzos6 =new Buzos ("queen ", "crema", 16000)
const buzos7 =new Buzos ("friza", "gris", 16000)
const buzos8 =new Buzos ("duke university", "verde", 16000)

