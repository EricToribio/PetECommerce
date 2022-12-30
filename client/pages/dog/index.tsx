
import Cookies from "js-cookie"
import { useEffect, useState } from "react"

import LandingNav from "../../navigation/nav-bars/landing-nav"
import  LandingSideBar  from "../../navigation/side-bars/landingSideBar"

export default () => {
    const [tab, setTab] = useState<string>()
    useEffect(() =>{
        

        Cookies.remove("cat Tab",{path: '/'})
        Cookies.remove("cleaning Tab",{path: '/'})
        
    },[])
    return (
        <div  className="landing-container">
        <div className="nav-wrapper">
            <LandingNav page="dogs"/>
        </div>
       
            <LandingSideBar page={'dog'} tab={tab} setTab={setTab}/>
        </div>
    )
}