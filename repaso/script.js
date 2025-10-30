/*const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;
for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const id = document.createElement("h4");
    id.textContent = Post ID: ${post.id};

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);
    postContainer.append(id);

    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts);*

let ataquejugador = "";
let ataqueenemigo = "";

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener('click', seleccionarMascota);

  let botonfuego = document.getElementById("boton-fuego");
  botonfuego.addEventListener('click', ataqueFuego);
  let botonagua = document.getElementById("boton-agua");
  botonagua.addEventListener('click', ataqueAgua);
  let botontierra = document.getElementById("boton-tierra");
  botontierra.addEventListener('click', ataqueTierra);  
}

function ataqueFuego() {
  ataquejugador = "FUEGO";
  ataqueenemigo()
}
function ataqueAgua() {
  ataquejugador = "AGUA";
  ataqueenemigo();
}
function ataqueTierra() {
  ataquejugador = "TIERRA";
  ataqueenemigo();

 alert(ataqueenemigo);
}


function crearmensaje() {
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "Tu mascota ataco con " + ataquejugador + ", la mascota del enemigo ataco con " + ataqueenemigo;

  let sectionMensajes = document.getElementById("mensajes");
  sectionMensajes.appendChild(parrafo);
}

function seleccionarMascota() {
    let mascotaJugador = document.getElementById("mascota-jugador");
  //alert ("seleccionaste tu maldita Mascota")
  if (document.getElementById("hipodoge").checked) {
    mascotaJugador.innerHTML = "Hipodoge";
    //alert("seleccionaste a Hipodoge");
  } else if (document.getElementById("capipepo").checked) {
    mascotaJugador.innerHTML = "Capipepo";
    //alert("seleccionaste a Capipepo");
  } else if (document.getElementById("ratigueya").checked) {
    mascotaJugador.innerHTML = "Ratigueya";
    //alert("seleccionaste a Ratigueya");

    } else {
      alert("No seleccionaste ninguna mascota");
    }

    seleccionarMascotaEnemigo();
}

window.addEventListener('load', iniciarJuego);

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    let mascotaEnemigo = document.getElementById("mascota-enemigo");
    if (ataqueAleatorio == 1) {
      mascotaEnemigo.innerHTML = "Hipodoge";
    } else if (ataqueAleatorio == 2) {
      mascotaEnemigo.innerHTML = "Capipepo";
    } else {
      mascotaEnemigo.innerHTML = "Ratigueya";
    }
  }
*/

let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    crearMensaje()
}
function crearMensaje() {

    let contenedorMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo;

    contenedorMensajes.appendChild(parrafo)

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)