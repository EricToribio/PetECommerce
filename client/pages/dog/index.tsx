import LandingNav from "../../navigation/nav-bars/landing-nav"
import { landingSideBar } from "../../navigation/side-bars/landingSideBar"
import { sideNav } from "../../components/test/sideNav"

export default () => {

    return (
        <div  className="landing-container">
        <div className="nav-wrapper">
            <LandingNav page="dogs"/>
        </div>
       
            <landingSideBar>
                
            </landingSideBar>
           
    
        
        

        </div>
    )
}