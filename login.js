 /*const userdatebase = [
        {username: "rito1", password: "pass1"},
        {username: "rito2", password: "pass2"},
        {username: "rito3", password: "pass3"},
    ];  

   const userstimeline = [
        {username: "rito1", timeline: " rito1"},
        {username: "rito2", timeline: " rito2"},
        {username: "rito3", timeline: " rito3"},
   ];   
   const usernameprompt = prompt("ingrese su nombre de usuario");
   const passwordprompt = prompt("ingrese su contraseña");
    function usuarioexistente(username, password) {
        for (let i = 0; i < userdatebase.length; i++) {
            if (userdatebase[i].username === username &&
                userdatebase[i].password === password
            ) {
                return true;
            }
            console.log("usuario no encontrado");
        }
        console.log("usuario no encontrado");
        return false;
    }

    const usuarioValido = usuarioexistente(usernameprompt, passwordprompt);
    console.log(usuarioValido);

    if (usuarioValido) {
        alert("bienvenido al sistema");
    } else {
        alert("usuario o contraseña incorrectos");
    }    
   *
const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}*
promesas 
estados pending inicia
        fullfilled termina
        rejected falla

  callbacks 
  resolve
  reject
*
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
*

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessful = true;
    if (operationSuccessful) {
      resolve("La operación fue exitosa!");
    } else {
      reject("Falló la operación");
    }
  }, 2000);
});

promise
  .then((message) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });*/

function fetchdata(){
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.log("hubo un error");
    });
}