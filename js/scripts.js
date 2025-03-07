//DOM SCRIPTING PARA SELECCIONAR Y MODIFICAR CODIGO HTML

//querySelector
//Retorna ya ninguno o hasta un elemento que coincida con el seleccionado
//Los selectores son similares a los del CSS (.clase) (#id)

const heading = document.querySelector('.header__texto h2') //Seleccionandolo sin el id, solo clase padre y el elemento html

heading.textContent = 'Nuevo heading'; // Modificando el cuerpo del h2

heading.classList.add('nueva-clase'); // agregandole una nueva clase al h2 

//querySelectorAll Retorna de 0 hasta todos los elementos que coincidan

const enlaces = document.querySelectorAll('.navegacion a') //Nos selecciona o retorna todos los elementos enlaces de padre navegacion
console.log(enlaces[0]) //Retorna Nodelist (Array), asi que podemos seleccionar que index elegir

enlaces[0].textContent = 'nuevo texto para enlaces'
enlaces[0].href = 'https://google.com' //Podemos modificar el enlace 
enlaces [0].classList.add('nueva-clase'); //Creando nueva clase en enlace
enlaces[0].classList.remove('navegacion__enlace') //Eliminando clase de enlace, no requiere punto como en el add


//querySelectorById (Mas antigua)

const heading2 = document.getElementById('heading');
console.log(heading2)

