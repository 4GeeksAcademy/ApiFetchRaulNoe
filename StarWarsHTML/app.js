const StarWarsPeople = document.querySelector("#root");

fetch("https://www.swapi.tech/api/people")
.then( respuesta => respuesta.json())
.then(respuesta => {
    StarWarsPeople.innerHTML = 
    `<ul>
        ${respuesta.results.map(people => {
            return (
                `<li><a href=${people.url}>${people.name}</a></li>`
            )
        })}
    </ul>`.replaceAll(",", "")
    }
)
.catch(error => console.log(error));