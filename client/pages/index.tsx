import Landing from "../components/landing"
import LandingNav from "../navigation/nav-bars/landing-nav"



export default () => {
  return(
    <div  className="landing-container">
      <div className="nav-wrapper">
      <LandingNav/>
      </div>
      <div  className="landing-body">
      <Landing />
      </div>
    </div>
  )
}


