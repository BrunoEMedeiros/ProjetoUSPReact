
import { usePost } from "../../hooks/usePost";

export async function handleSala(nomeSala, setDataCallBack){
    usePost('/sala/novo', {
        nome : nomeSala
    })
    setDataCallBack(true);
}