import React from 'react'

export default ({cartItems,setCartItems, selectedTab, setSelectedTab }) => {

    const selected = ( tab) => {

        setSelectedTab(tab)
    }
    const links = [
        { name : "Dogs", value : "dogs" },
        { name : "Cats", value : "cats" },
        { name : "All Products", value : "all" }
    ]

    return (
        <div className=" d-flex align-items-center justify-content-between pt-4 px-4">
            <div>
                <h1>Pet Store</h1>
            </div>


            <div className="d-flex gap-3">
                {
                    links.map((item, i) => {
                        let linkStyle = ``;
                        selectedTab === item.value ? (linkStyle += "btn-link bg-white border-0 text-danger") :
                            (linkStyle += "btn-link bg-white border-0 ");
                        return (
                            <button key={i} value={item.value} className={linkStyle} onClick={(e) => selected(e.target.value)}>{item.name}</button>
                        )
                    })}
            </div>
            <div >
            <button className="d-flex gap-2 bg-white border-0">
                {
                    cartItems === 0 ? 
                    <i class="bi bi-cart"> </i> : 
                    <i class="bi bi-cart">{cartItems}</i> 
                }
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </button>
            </div>

        </div>
    )
}
