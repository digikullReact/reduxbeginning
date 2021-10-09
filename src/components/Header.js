import React from 'react'
import {useSelector} from "react-redux";

function Header() {
    const count = useSelector((state) => state.counter)
    const loginReducer=useSelector((state)=>state.auth)
    return (
        <div>
            {count.value}
            <h1>   {count.namOfReducer}</h1>

            <h2>{loginReducer.username}</h2>
         
            
        </div>
    )
}

export default Header
