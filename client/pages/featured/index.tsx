import UnderConstruction from "../../components/underConstruction"
import LandingNav from "../../navigation/nav-bars/landing-nav"


export default ()=>{

    return(
        <div  className="landing-container">
        <div className="nav-wrapper">
            <LandingNav page="featured"/>
        </div>
        <UnderConstruction/>


        </div>
    )
}