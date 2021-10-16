import React,{useStat,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import { fetchUserById} from '../thunks';


// useState is specific to the that component--->

function Home() {
    const dispatch= useDispatch();
    const state=useSelector(state=>state.counter);



    useEffect(() => {
        debugger;
        dispatch(fetchUserById())
      
    }, [])

  




 


    return (
        <div style={{marginTop:"400px"}}>

            {
                state.entities.map(ele=>(
                    <li>{ele.name}</li>
                ))
            }

           

            
        </div>
    )
}

export default Home


/// Decrement by 2   --->