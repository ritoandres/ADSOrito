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

fetchButton.addEventListener("click", fecthPosts);*/

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener('click', seleccionarMascota);
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
}

window.addEventListener('load', iniciarJuego);