//DOM SCRIPTING PARA SELECCIONAR Y MODIFICAR CODIGO HTML

//querySelector
//Retorna ya ninguno o hasta un elemento que coincida con el seleccionado
//Los selectores son similares a los del CSS (.clase) (#id)

const heading = document.querySelector('.header__texto h2') //Seleccionandolo sin el id, solo clase padre y el elemento html

heading.textContent = 'Nuevo heading'; // Modificando el cuerpo del h2

heading.classList.add('nueva-clase'); // agregandole una nueva clase al h2 

//querySelectorAll Retorna de 0 hasta todos los elementos que coincidan

const enlaces = document.querySelectorAll('.navegacion a') //Nos selecciona o retorna todos los elementos enlaces de padre navegacion
//console.log(enlaces[0]) //Retorna Nodelist (Array), asi que podemos seleccionar que index elegir

enlaces[0].textContent = 'nuevo texto para enlaces'
enlaces[0].href = 'https://google.com' //Podemos modificar el enlace 
enlaces [0].classList.add('nueva-clase'); //Creando nueva clase en enlace
//enlaces[0].classList.remove('navegacion__enlace') //Eliminando clase de enlace, no requiere punto como en el add


//querySelectorById (Mas antigua)

const heading2 = document.getElementById('heading');



//Generar nuevo enlace con JS

const nuevoEnlace = document.createElement('A')//Se recomiendo crear las etiquetas en mayusculas

//Agregar el href

nuevoEnlace.href = 'nuevo-enlaces.html';

//Agregar el texto

nuevoEnlace.textContent = 'Este es mi nuevo enlace';

//Agregar la clase navegacion__enlace

nuevoEnlace.classList.add('navegacion__enlace')

//Agregarlo al documento

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);//appendChild es como decir agrega
// x elemento como hijo de la clase principal, en este caso agregamos el nuevo enlace a la barra 


//Eventos en JS , desde deslizar hasta dar click

console.log(1)

window.addEventListener('load', imprimir)
//load espera a que el JS y los archivos que dependen del HTML esten listos
//Una vez que lo que se ponga en el addEventListener se cumpla, el codigo siguiente se ejecuta

window.onload = function(){
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){ // DOMContentLoad espera solo a que se descargue
//el HTML por eso imprime mas rapido que el load ya que ese si espera hasta el css
    console.log(4)
})


console.log(5)

function imprimir () {
    console.log(2)
}

window.onscroll = function() {
        console.log('You are scrolling')
}

//Seleccionar elementos y agregarles eventos
/*
const btnSend = document.querySelector('.boton--primario');
btnSend.addEventListener('click', function(evento) {
    console.log(evento); 
    evento.preventDefault();//Quita la accion por default del sumbit que hace que se recargue la pagina al darle el sumbit
    //sirve por ejemplo para validar el formulario
    console.log('enviando formulario');
})
*/

 // Eventos en Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');//Seleccionando el input con el Id 'nombre'
const email = document.querySelector('#email');//Seleccionando el input con el Id 'email'
const mensaje = document.querySelector('#mensaje');//Seleccionando el input con el Id 'mensaje'
const formulario = document.querySelector('.formulario');

nombre.addEventListener('change', function() {//Se ejecuta hasta que dejo de estar focus en ese input
    console.log('Escribiendo');
});

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento del submit


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const { nombre, email, mensaje } = datos;
    //aplicar destructuring para extraer los valores de un objeto y crear las variables todo en un mismo paso

    if (nombre && email ==='') {
        console.log('El nombre y/o email está vacio')
        mostrarAlerta('Todos los campos son obligatorios ⛔', true);
        return; //return corta la ejecucion del codigo
    }
    
    //Muestra el mensaje de confirmacion del envio
    mostrarAlerta('El correo se envio correctamente')
    



    //enviar el formulario

    console.log('Enviando el formulario');

});

function leerTexto(e){

    datos[e.target.id] = e.target.value;

    //console.log(e.target);
}

function mostrarAlerta(mensaje, error=null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.classList.add('fade-out'); // Agrega la clase para la animación
    }, 4500);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
    
}



 