 const userdatebase = [
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
                userdatebase[i].password === password) {
                    return true;
                }
                console.log("usuario no encontrado");
        }

        console.log("usuario no encontrado");
        return false;
    }
    console.log(usuarioexistente(usernameprompt, passwordprompt));

    function mostrartimeline(username, password) {
        if (usuarioexistente(username, password)) {
            for (let i = 0; i < userstimeline.length; i++) {
                if (userstimeline[i].username === username) {
                    console.log(userstimeline[i].timeline);
                }
            }
        } else {
            console.log("Usuario no encontrado");
        }
    }
