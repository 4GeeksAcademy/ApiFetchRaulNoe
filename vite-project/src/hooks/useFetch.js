import {useEffect, useState} from 'react';

const useGetData = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res.results))
        .catch(err => console.log(err))
    }, [])

    return data
}

export default useGetData;