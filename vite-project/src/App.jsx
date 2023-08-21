import { useEffect, useState } from 'react'
// import LisOfNames from './components/ListOfNames'


const App = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      setUsers(respuesta.results);
    })
    .catch(error => console.log(error));

  }, [])
  
  return (
    <ul>
      {users.map(people => {
        return (
          <li key={people.uid}><a href={people.url}>{people.name}</a></li>
        )
      })}
    </ul>)
};

export default App
