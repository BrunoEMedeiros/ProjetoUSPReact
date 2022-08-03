import { Tweet } from '../Components/Tweet';
import { useState } from 'react';

export function Home(){
        const [tweets, setTweets] = useState([
            'tweet 1',
            'tweet 2',
            'tweet 3'
        ]);
    
        function createTweet(){
            //Função setState sempre SUBSTITUI O VALOR e não cria um novo
            setTweets([...tweets, 'cccc'])
        }
    
        return (
            <div>
               {
                tweets.map(tweet =>{
                    return <Tweet name={tweet} />
                })
               }
    
               <button 
                    onClick={createTweet}
                    style={{
                        backgroundColor: '#8257e6',
                        border: 0,
                        padding: '6px 12px',
                        color: "white"
                    }}
                >
                    Clique em mim
                </button>
            </div>
        )
}