import React, { useState } from 'react'
import NavBar from '../components/nav-bars/NavBar'

export default ({cartItems, setCartItems}) => {
    const [ selectedTab, setSelectedTab ] = useState("dog")
    return (
        <div>
            <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    )
}
