import { useEffect, useState } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:4000'
})

export function useFetch(){

    const[data, setData] = useState([]);
    const[carregando, setCarregando] = useState(true);
    const[dataCallBack, setDataCallBack] = useState(false);
    const[url, setUrl] = useState('/sala/');

    useEffect(() => {
      api
      .get(url)
      .then((response) => {
          setData(response.data);
          setDataCallBack(false);
          setCarregando(false);
      })  
    }, [dataCallBack, url])

    return { data, setData, carregando, setDataCallBack, url, setUrl }
}

