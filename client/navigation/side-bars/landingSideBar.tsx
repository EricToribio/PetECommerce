
import { Dispatch, SetStateAction } from "react"
import CatSideBar from "./sideBarComponents/catSideBar"
import CleaningSupplies from "./sideBarComponents/cleaningSupplies"
import DogSideBar from "./sideBarComponents/dogSideBar"


export default (props : { page : string ,tab :string | undefined, setTab : Dispatch<SetStateAction<string |undefined >>}) => {
  
    return(
        <div className="side-bar-container">
          {
            props.page === "dog" &&
                <DogSideBar tab={props.tab} setTab={props.setTab}/>
          }
          {
            props.page === "cat" &&
            <CatSideBar/>
          }
          {
            props.page === "cleaning" &&
            <CleaningSupplies/>
          }
            
        </div>
  )
}
