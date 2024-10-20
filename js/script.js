const productos = [
    {
        id: 1,
        nombre: "campera deportiva",
        precio: 35000,
        cantidad: 1
    },
    {
        id: 2,
        nombre: "campera rompe viento",
        precio: 35000,
        cantidad: 1
    },
    { 
    id: 3,
    nombre: "camperon",
        precio: 35000,
        cantidad: 1
    },
    { 
    id: 4,
    nombre: "campera Bl",
        precio: 35000,
        cantidad: 1
    },
    { 
    id: 5,
    nombre: "campera de cuero",
        precio: 35000,
        cantidad: 1
    },
    { 
    id: 6,
    nombre: "campera deportiva",
            precio: 35000,
            cantidad: 1
    },
    { 
    id: 7,
    nombre: "campera puma",
        precio: 35000,
        cantidad: 1
    },
        { 
    id: 8,
    nombre: "campera de cuero",
        precio: 35000,
        cantidad: 1
    },
        { 
    id: 9,
    nombre: "adidas",
        precio: 65000,
        cantidad: 1
    },
         { 
    id: 10,
    nombre: "dcshoecousa",
        precio: 75000,
        cantidad: 1
    },
         { 
    id: 11,
    nombre: "puma",
        precio: 65000,
        cantidad: 1
    },
         { 
    id: 12,
    nombre: "zapas de cuero",
        precio: 65000,
        cantidad: 1
    },
         { 
    id: 13,
    nombre: "deportivas",
        precio: 55000,
        cantidad: 1
    },
         { 
    id: 14,
    nombre: "puma",
        precio: 65000,
        cantidad: 1
    },
         { 
    id: 15,
    nombre: "grand funk",
        precio: 55000,
        cantidad: 1
    },
         { 
    id: 16,
    nombre: "over the sea",
        precio: 65000,
        cantidad: 1
    },
    { 
    id: 17,
    nombre: "lisas de color",
        precio: 8000,
        cantidad: 1
    },
     { 
    id: 18,
    nombre: "nike",
        precio: 8000,
        cantidad: 1
    },
     { 
    id: 19,
    nombre: "fredes",
        precio: 8000,
        cantidad: 1
    },
     { 
    id: 20,
    nombre: "camiseta de argentina",
        precio: 8000,
        cantidad: 1
    },
     { 
    id: 21,
    nombre: "remera lisa blanca",
        precio: 5000,
        cantidad: 1
    },
     { 
    id: 22,
    nombre: "remera de los rolling stones",
        precio: 5000,
        cantidad: 1
    },
     { 
    id: 23,
    nombre: "diseño de flores",
        precio: 5000,
        cantidad: 1
    },
     { 
    id: 24,
    nombre: "lilo y stitch",
        precio: 5000,
        cantidad: 1
    },
      { 
    id: 25,
    nombre: "jogger",
        precio: 9000,
        cantidad: 1
    },
    { 
    id: 26,
    nombre: "jogger",
        precio: 9000,
        cantidad: 1
    },
     { 
    id: 27,
    nombre: "jogger",
        precio: 9000,
        cantidad: 1
    },
    { 
    id: 28,
    nombre: "jogger",
        precio: 9000,
        cantidad: 1
    },
    { 
    id: 29,
    nombre: "jogger",
        precio: 7000,
        cantidad: 1
    },
    { 
    id: 30,
    nombre: "jeans",
        precio: 7000,
        cantidad: 1
    },
    { 
    id: 31,
    nombre: "jeans",
        precio: 7000,
        cantidad: 1
    },
    { 
    id: 32,
    nombre: "jogger",
        precio: 7000,
        cantidad: 1
    },
    { 
    id: 33,
    nombre: "adidas",
        precio: 16000,
        cantidad: 1
    }, 
        { 
    id: 34,
    nombre: "nike",
        precio: 16000,
        cantidad: 1
    },  
        { 
    id: 35,
    nombre: "con el logo de marshmello",
        precio: 16000,
        cantidad: 1
    },
        { 
    id: 36,
    nombre: "norafight",
        precio: 16000,
        cantidad: 1
    },
        { 
    id: 37,
    nombre: "mickey mouses",
        precio: 16000,
        cantidad: 1
    },
        { 
    id: 38,
    nombre: "queen",
        precio: 16000,
        cantidad: 1
    },
        { 
    id: 39,
    nombre: "friza",
        precio: 16000,
        cantidad: 1
    },
        { 
    id: 40,
    nombre: "duke university",
        precio: 16000,
        cantidad: 1
    },   
]

 //productos.forEach( (Productos) => {
 //   console.log(productos)
 //   console.log("producto:"+productos.nombre+"precio:$"+productos.precio)
//})

//el carrito
//const busqueda = productos.find((producto) => producto.nombre == "friza")
//console.log(busqueda)
//reduce()
const precioTotal = productos.reduce((contador, productos) => contador + productos.precio, 0)
console.log(precioTotal)