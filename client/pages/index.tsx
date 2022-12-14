import Cookies from "js-cookie"
import { useEffect } from "react"
import Landing from "../components/landing"
import LandingNav from "../navigation/nav-bars/landing-nav"



export default () => {
  useEffect(() =>{
    Cookies.remove("dog Tab",{path: '/'})
    Cookies.remove("cat Tab",{path: '/'})
    Cookies.remove("cleaning Tab",{path: '/'})
    
},[])
  return(
    <div  className="landing-container">
      <div className="nav-wrapper">
      <LandingNav page="main"/>
      </div>
      <div  className="landing-body">
      <Landing />
      </div>
    </div>
  )
}


