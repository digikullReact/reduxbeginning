import React from 'react'
import {useDispatch} from "react-redux";
import { increment ,decrement,incrementByTwo} from '../reducers';


function Home() {
    const dispatch= useDispatch();


    const sendDispatch=()=>{
        dispatch(increment())  /// dispatching the increment action

        /// Single dispatch can be used to dispatch multiple actions

    }


    return (
        <div style={{marginTop:"400px"}}>

            <button onClick={sendDispatch}>
                Increment
            </button>


            <button onClick={()=>dispatch(decrement())}>
               Decrement
            </button>


            <button onClick={()=>dispatch(incrementByTwo())}>
               Increment By 2
            </button>



            
        </div>
    )
}

export default Home


/// Decrement by 2   --->