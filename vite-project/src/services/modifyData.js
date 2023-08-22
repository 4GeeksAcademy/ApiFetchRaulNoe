const URL = "https://pruebas-raul-4geeks-default-rtdb.europe-west1.firebasedatabase.app/swapi.json"

export function handlePutData(data) {
    fetch(URL,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
      }
    )
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
  };

export function handleDeleteData(data) {
    fetch(URL,
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
      }
    )
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
  };