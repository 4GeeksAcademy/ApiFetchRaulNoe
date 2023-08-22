import { useState } from "react"
import useGetData from './hooks/useFetch';
import { handleDeleteData, handlePutData } from './services/modifyData';
// import LisOfNames from './components/ListOfNames'


const App = () => {
  const data = useGetData("https://www.swapi.tech/api/people")
  const [usersInfo, setUsersInfo] = useState(data)
   
  return (
    <>
      <ul>
        {usersInfo.map(people => {
          return (
            <li key={people.uid}>
            <a href={people.url}>{people.name}</a>
            <button onClick={()=>handleDeleteData(people.uid)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <button onClick={()=>handlePutData(data)}>Put Data</button>
      
    </>
    )
};

export default App;
