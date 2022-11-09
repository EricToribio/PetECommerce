import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import LandingNav from "../../navigation/nav-bars/landing-nav"
import LandingSideBar from "../../navigation/side-bars/landingSideBar"

export default () => {
    const [tab, setTab] = useState<string>()
    useEffect(() =>{
        Cookies.get('cat Tab') && setTab(Cookies.get('cat Tab'))
        Cookies.remove("dog Tab",{path: '/'})
        Cookies.remove("cleaning Tab",{path: '/'})
        
    },[])
    return (
        <div  className="landing-container">
        <div className="nav-wrapper">
            <LandingNav page="cats"/>
        </div>
       
            <LandingSideBar page={'cat'} tab={tab} setTab={setTab}/>
                
        
           
    
        
        

        </div>
    )
}