import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import { increment ,decrement,incrementByTwo, incrementByAmount} from '../reducers';


function Home() {
    const dispatch= useDispatch();

    const [state,setState]=useState("");


    const sendDispatch=()=>{
        dispatch(increment())  /// dispatching the increment action

        /// Single dispatch can be used to dispatch multiple actions

    }


    const handleChange=(event)=>{
        setState(event.target.value);

    }

    const dispatchAnother=()=>{
        dispatch(incrementByAmount(parseInt(state)))
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
            

            <input type="text"  onChange={handleChange}/>


            <button onClick={dispatchAnother}>
               Increment By Value
            </button>


            
        </div>
    )
}

export default Home


/// Decrement by 2   --->