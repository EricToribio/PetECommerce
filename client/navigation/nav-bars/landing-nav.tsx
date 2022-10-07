
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
        {
            props.page != "main" &&
            <a className="nav-link " href="/" >Home</a>
        }
        {
            props.page != "dogs" &&
            <a className="nav-link " href="/dog" >Dogs</a>
        }
        
         {
            props.page != "cats" &&    
             <a href="/cat" className=" nav-link" >Cats</a>
        }
        {
            props.page != "cleaning" &&
            <a href="/cleaning" className=" nav-link" >Cleaning Supplies</a>
        }
         {
            props.page != "deals" &&
            <a href="/deals" className=" nav-link " >Deals</a>
         }
         {
            props.page != "featured" &&
            <a className=" nav-link " href='/feature' >Featured</a>
         }
        
          
          
        </div>
      </div>
        </nav>
    )
}