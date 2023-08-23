import React, { useState, useEffect } from "react";
import useGetData from './hooks/useFetch';
import { handleDeleteData, handlePutData } from './services/modifyData';

const App = () => {
  const data = "https://www.swapi.tech/api/people";
  const fetchedData = useGetData(data);

  const [loading, setLoading] = useState(true);
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    setUsersInfo(fetchedData);
    setLoading(false);
  }, [fetchedData]);

  const handleDelete = (uid) => {
    console.log('Before delete:', usersInfo);
    handleDeleteData(uid);
    const updatedUsersInfo = usersInfo.filter(people => people.uid !== uid);
    console.log('After delete:', updatedUsersInfo);
    setUsersInfo(updatedUsersInfo);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {usersInfo.map(people => (
          <li key={people.uid}>
            <a href={people.url}>{people.name}</a>
            <button onClick={() => handleDelete(people.uid)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handlePutData(data)}>Put Data</button>
    </>
  );
};

export default App;
