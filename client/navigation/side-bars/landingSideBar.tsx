
import CatSideBar from "./sideBarComponents/catSideBar"
import CleaningSupplies from "./sideBarComponents/cleaningSupplies"
import DogSideBar from "./sideBarComponents/dogSideBar"


export default (props : { page : string}) => {
  
    return(
        <div className="side-bar-container">
          {
            props.page === "dog" &&
                <DogSideBar/>
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
