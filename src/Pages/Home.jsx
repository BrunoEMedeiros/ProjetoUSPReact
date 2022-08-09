import { useFetch } from "../hooks/useFetch"

export function Home(){
    
    const { data } = useFetch('/sala/');
    return(
            <ul>
                {
                    data.map(salas =>{
                        return (
                            <li>
                                {salas.nome}
                            </li>
                        )
                    })
                }
            </ul>
        )
}