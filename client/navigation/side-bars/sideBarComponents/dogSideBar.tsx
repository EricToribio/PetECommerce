
import Cookies from "js-cookie"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { NavItem } from "react-bootstrap"
import { SideBarTabs } from "../../../utils/side-bar-util"


export default (props : {tab :string | undefined, setTab : Dispatch<SetStateAction<string | undefined>>}) => {
    
    
  
    const handleNav = (tab : string) => {
        props.setTab(tab)
        Cookies.set('dog Tab',tab, {path: '/'})
    }

    return (
        <div className="d-flex  h-100">
            <ul className="list-unstyled ">

                {SideBarTabs.map((item, i) => {
                    let style=``
                    props.tab === item.Tab ?
                    (style+=`side-bar-active`) 
                    :
                    (style+=`side-bar-inactive`) 
                    
                    return (
                        <li className="d-flex justify-content-center">
                            <button onClick={(e) => handleNav(item.Tab)} className={`side-bar-item ${style}`}>{item.Name}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}