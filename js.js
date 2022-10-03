let pizzas = [

    {
   id: 1,
   nombre: 'napolitana',
   ingredientes: ['aceitunas', 'salsa de tomate', 'mozzarella', 'tomates', 'ajo'],
   precio: 1200,
   },

    {
   id: 2,
   nombre: 'muzzarella',
   ingredientes: ['aceitunas', 'salsa de tomate', 'mozarela', 'oregano'],
   precio: 550,
   },

    {
   id: 3,
   nombre: 'capresse',
   ingredientes: ['aceitunas', 'salsa de tomate', 'mozarela', 'oregano', 'albahaca', 'tomates'],
   precio: 2120,
   },

    {
   id: 4,
   nombre: 'de champiñones',
   ingredientes: ['aceitunas negras', 'salsa de tomate', 'mozarela', 'champiñones laminados', 'ajo', 'rúcula'],
   precio: 1850,
   },

    {
   id: 5,
   nombre: 'jamon y morron',
   ingredientes: ['aceitunas', 'salsa de tomate', 'mozarela', 'jamon', 'morron'],
   precio: 1900,
   },

    {
   id: 6,
   nombre: 'cuatro quesos',
   ingredientes: ['aceitunas', 'salsa de tomate', 'mozarela', 'gorgonzola', 'fontina', 'parmesano'],
   precio: 2000,
   },

];

pizzas.forEach(pizza => {
   if(pizza.id % 2 != 0 )
   console.log (`El id Nº ${pizza.id} de la pizza ${pizza.nombre} es impar.`)
});

pizzas.filter(pizza => {
   if(pizza.precio < 600)
   console.log(`La pizza ${pizza.nombre} cuesta menos de $600.`)
})

pizzas.forEach(pizza => {
   console.log(`La pizza ${pizza.nombre} tiene un costo de $${pizza.precio}.`)
})

pizzas.forEach(pizza => {
   console.log(`La pizza ${pizza.nombre} contiene los siguientes ingredientes: ${pizza.ingredientes}.`)
})
