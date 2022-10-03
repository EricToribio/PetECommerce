
import Image from 'next/image'
import { useState } from 'react';
import logo from '../../static/img/toribio-ecommerce.png' 
export default (props : {page : string}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  

    const style = {
      "display": "none"
    }
    const handleNull = () => { return null;}
   
  
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  
    return(
        <nav className="nav-container navbar navbar-expand-lg navbar-dark  rounded px-4">
            <div id='nav-logo'>
           <Image  width={250} height={100} src={logo} alt="Toribio's Ecom"/>
            </div>
           <button className="custom-toggler navbar-toggler" type="button"
        data-toggle="collapse"
        data-target="#navbars"
        aria-controls="navbars"
        aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"
        data-auto-close="outside"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
           <div className={`${isNavCollapsed ? 'collapse ' : ''} navbar-collapse `} id="navbars">
        <div className={`${isNavCollapsed ? 'navbar-collapse' : 'nav-dropdown '}  `}
        onMouseLeave={isNavCollapsed ? handleNull : handleNavCollapse}>
        
            <a className="nav-link " href="/food" >Food</a>
        
         
            <a href="/toys" className=" nav-link" >Toys</a>
         
            <a href="/containment" className=" nav-link " >Crates & Carriers</a>
         
            <a className=" nav-link " href='/furniture' >Beds & Furniture</a>
        
            <a href="/cleaning" className=" nav-link" >Cleaning Supplies</a>
          
          
            <a className="nav-link " href="/collars" > Collars , Harnesses & Leashes</a>
          
        </div>
      </div>
        </nav>
    )
}