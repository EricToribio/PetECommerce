import { NavItem } from "react-bootstrap"
import { SideBarTabs } from "../../../utils/side-bar-util"


export default () => {

    return (
        <div className="d-flex  h-100">
            <ul className="list-unstyled ">

                {SideBarTabs.map((item, i) => {
                    return (
                        <li className="d-flex justify-content-center">
                            <button className="side-bar-item">{item.Name}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}