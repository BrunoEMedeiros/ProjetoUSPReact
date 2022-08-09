import { useEffect, useState } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:4000'
})

export function useFetch(url){

    const[data, setData] = useState([]);
    const[carregando, setCarregando] = useState(true);
    const[a, setA] = useState(false);

    useEffect(() => {
      api
      .get(url)
      .then((response) => {
          setData(response.data);
          setCarregando(false);
      })  
    }, [a]);

    return { data, carregando, setA }
}

