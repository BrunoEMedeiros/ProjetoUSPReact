import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:4000'
})

export function useDelete(url){

    api.delete(url)
    .then((response) => {
            if(response.status == 206)
            {
                window.alert(
                    "Faltou alguma coisa!"
                )
                if (confirmBox === true) {
                  window.close  
                }
                return false
            }
            
            else if(response.status == 203)
            {
                window.alert(
                    "Esta sala ja foi cadastrada"
                )
                if (confirmBox === true) {
                  
                  window.close  
                }
                return false
            }
            
            else if(response.status == 500)
            {
                window.alert(
                    "Ops...ocorreu um erro ao excluir a sala"
                )
                if (confirmBox === true) {
                  window.close  
                }
                return false
            }
            
            else if(response.status == 200)
            {
                return true
            }

        });
}