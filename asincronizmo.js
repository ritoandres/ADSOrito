  /*async function fetchdata() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character?page=2");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchdata();

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode"
];

async function fetchnewdata() {
        try {
        for await (let pepito of urls) {
            let response = await fetch(pepito);
            let data = await response.json();
            console.log(data);
        }
        
    } catch (error) {
        console.log(error);
    }
}*

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));*/

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
}
fecthPosts();