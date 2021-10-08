import React from 'react'
import {useSelector} from "react-redux";

function Header() {
    const count = useSelector((state) => state.counter)
    return (
        <div>
            {count.value}
            
        </div>
    )
}

export default Header
