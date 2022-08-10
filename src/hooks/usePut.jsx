import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:4000'
})

export function usePut(url, body){

    api.put(url, body)
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
                    "Ops...ocorreu um erro ao alterar a sala"
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