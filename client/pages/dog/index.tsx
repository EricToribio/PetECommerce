import LandingNav from "../../navigation/nav-bars/landing-nav"
import  LandingSideBar  from "../../navigation/side-bars/landingSideBar"

export default () => {

    return (
        <div  className="landing-container">
        <div className="nav-wrapper">
            <LandingNav page="dogs"/>
        </div>
       
            <LandingSideBar page={'dog'}/>
                
        
           
    
        
        

        </div>
    )
}