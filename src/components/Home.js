import React from 'react'
import {useDispatch} from "react-redux";
import { increment ,decrement} from '../reducers';


function Home() {
    const dispatch= useDispatch();


    const sendDispatch=()=>{
        dispatch(increment())

    }


    return (
        <div style={{marginTop:"400px"}}>

            <button onClick={sendDispatch}>
                Increment
            </button>


            <button>
               Decrement
            </button>
            
        </div>
    )
}

export default Home
