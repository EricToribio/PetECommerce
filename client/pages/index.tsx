import Landing from "../components/landing"
import LandingNav from "../navigation/nav-bars/landing-nav"
import LandingSideBar from "../navigation/side-bars/landingSideBar"



export default () => {
  return(
    <div style={{height : "100vh"}} className="bg-warning">
      <div className="bg-success " style={{ position : "fixed" , top : "0"}}>
      <LandingNav/>
      </div>
      <div style={{marginTop : "100px"}} className="d-flex h-100">
      <LandingSideBar/>
      <Landing />
      </div>
    </div>
  )
}


