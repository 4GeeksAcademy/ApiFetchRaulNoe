fetch("https://www.swapi.tech/api/people")
.then( respuesta => respuesta.json())
.then(respuesta => console.log(respuesta.results))
.catch(error => console.log(error));

