import React from 'react'
import { useSelector } from 'react-redux'



function Footer() {
    const state = useSelector(state => state.counter)
    return (
        <div>
            {state.value}
            
        </div>
    )
}

export default Footer
