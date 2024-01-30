const listaDeProductos = [
{
  id: "jewel1",
  nombre: "Radiance Necklace",
  codigo: 70000,
  precioUnitario:620.73,
  tipoDeAccesorio: "collar",
  imagen:[""] ,
  descripcion: "",
  cantidad: "",
},

{
  id: "jewel2",
  nombre: "Exquisite Earrings",
  codigo: "70001",
  precioUnitario: 125.28,
  tipoDeAccesorio: "aretes",
  imagen:[],
  descripcion:"Aretes con diamante",
  stockPorColor: {
    plata: 10,
    dorado: 5,
  }
},

{
  id: "jewel3",
  nombre: "Glamour Necklace",
  codigo: "70002",
  precioUnitario: 620.73,
  tipoDeAccesorio: "collar",
  imagen: [],
  descripcion: "Collar con perlas",
  stockPorColor: {
    plata: 3,
    dorado: 5,
  },
},

{
  id: "jewel4",
  nombre: "Delights Earrings",
  codigo: "70003",
  precioUnitario: 327.71,
  tipoDeAccesorio: "aretes",
  imagen: "",
  descripcion: "Aretes de oro",
  stockPorColor: {
    plata: 10,
    dorado: 2,
  },
},

{
  id: "jewel5",
  nombre: "Luxurious Lustre",
  codigo: "70004",
  precioUnitario: 125.28,
  tipoDeAccesorio: "aretes",
  imagen: "",
  descripcion: "Aretes con amatista",
  stockPorColor: {
    plata: 3,
    dorado: 2,
  },
},

{
  id: "jewel6",
  nombre: "Blissful Baubles",
  codigo: "70005",
  precioUnitario: 125.28,
  tipoDeAccesorio: "anillo",
  imagen: "",
  descripcion: "Anillo de diamante",
  stockPorColor: {
    plata: 8,
    dorado: 15,
  },
},

{
  id: "jewel7",
  nombre: "Radiant Reflections",
  codigo: "70006",
  precioUnitario: 327.71,
  tipoDeAccesorio: "collar",
  imagen: "",
  descripcion: "Collar doble",
  stockPorColor: {
    plata: 20,
    dorado: 19,
  },
},

{
  id: "jewel8",
  nombre: "Timeless Treasures",
  codigo: "70007",
  precioUnitario: 125.28,
  tipoDeAccesorio: "aretes",
  imagen: "",
  descripcion: "Aretes largos",
  stockPorColor: {
    plata: 12,
    dorado: 5,
  },
},

{
  id: "jewel9",
  nombre: "Majestic Mementos",
  codigo: "70008",
  precioUnitario: 620.73,
  tipoDeAccesorio: "collar",
  imagen: "",
  descripcion: "Collar largo",
  stockPorColor: {
    plata: 9,
    dorado: 9,
  },
},

{
  id: "jewel10",
  nombre: "Divine Diamonds",
  codigo: "70009",
  precioUnitario: 168.76,
  tipoDeAccesorio: "brazalete",
  imagen: "",
  descripcion: "Brazalete con pedrería",
  stockPorColor: {
    plata: 20,
    dorado: 25,
  },
},

]

// function getByType(products, typeProduct){
//   let filteredProducts = [];
//   for (let i=0; i<products.length; i++){
//     if (products[i].tipoDeAccesorio===typeProduct){
//       filteredProducts.push(products[i]);
//     }
//   }
//   return filteredProducts;
// }

// var collars = getByType(listaDeProductos, "collar");
// console.log(collars);

const getByType = (products, typeProduct) => {
  return products.filter(product => product.tipoDeAccesorio === typeProduct);
}

console.log(getByType(listaDeProductos, "collar"));



// function getByName(products, name){
//   let filteredProducts = [];
//   for (let i = 0; i < products.length; i++){
//     if (products[i].nombre.includes(name)){
//       filteredProducts.push(products[i]);
//     }
//   }
//   return filteredProducts;
// }

// var productByName = getByName(listaDeProductos, "Necklace");
// console.log(productByName);

const getByName = (products, name) => {
  return products.filter(product => product.nombre.includes(name));
}

console.log(getByName(listaDeProductos, "Necklace"));



// función para ordenar productos

const sortAsc = (productA, productB) => {
  if (productA.precioUnitario < productB.precioUnitario){
    return -1;
  }
  else if (productA.precioUnitario > productB.precioUnitario){
    return 1;
  }
  return 0;
} 

const sortDesc = (productA, productB) => {
  if (productA.precioUnitario < productB.precioUnitario){
    return 1;
  }
  else if (productA.precioUnitario > productB.precioUnitario){
    return -1;
  }
  return 0;
} 

const sortProducts = (products, typeSort) => {
  if (typeSort === "asc"){
    return products.sort(sortAsc);
  }
  else if (typeSort === "desc"){
    return products.sort(sortDesc);
  }
  return products;
}

console.log(sortProducts(listaDeProductos, "asc"));


// Función para sumar productos

var purchasedProducts = [ 
  {
    id: "jewel1",
    quantity: 4,
  },

  {
    id: "jewel10",
    quantity: 2,
  },

  {
    id: "jewel5",
    quantity: 1,
  }

]

const sumProducts = (products, cartProducts) => {
  let totalSum = 0;
  let product;
  for (let i = 0; i < cartProducts.length; i++){
    product = products.find(product => product.id === cartProducts[i].id);
    totalSum += product.precioUnitario * cartProducts[i].quantity;
  }
  return totalSum;
}

console.log(sumProducts(listaDeProductos, purchasedProducts));




