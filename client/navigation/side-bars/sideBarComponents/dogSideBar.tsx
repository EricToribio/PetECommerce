
import Cookies from "js-cookie"
import Router from "next/router"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

import { FoodTabs, SideBarTabs } from "../../../utils/side-bar-util"


export default (props: { tab: string | undefined, setTab: Dispatch<SetStateAction<string | undefined>> }) => {
    const [subTab, setSubTab] = useState<String>()

    useEffect(()=>{
        Cookies.get('dog Sub Tab') && setSubTab(Cookies.get('dog Sub Tab'))    },[])


    const handleNav = (tab: string) => {
        props.setTab(tab)
        Cookies.set('dog Tab', tab, { path: '/' })
        Cookies.remove("dog Sub Tab", { path: '/' })
        Router.push(`/dog/${tab}`)
    }

    const handleTab = (tab: string) => {
        tab === "" ?
        handleNav(tab) :
            setSubTab(tab)
            Cookies.set('dog Sub Tab', tab, { path: `/` })
    }

    return (
        <div className="d-flex justify-content-center h-100">
            <ul className="list-unstyled ">
               {/* {props.tab === "food" &&

<button className="side-bar-item side-bar-inactive" onClick={(e) => handleNav("")}>All Dog Products</button>
               }
                 */}
                

                {props.tab === "" || props.tab === undefined ?
                    SideBarTabs.map((item, i) => {
                        let style = ``
                        props.tab === item.Tab ?
                            (style += `side-bar-active`)
                            :
                            (style += `side-bar-inactive`)

                        return (
                            <li className="d-flex justify-content-center">
                                <button onClick={(e) => handleNav(item.Tab)} className={`side-bar-item ${style}`}>{item.Name}</button>
                            </li>
                        )
                    })
                    :
                    
                    props.tab === "food" &&
                    
                    FoodTabs.map((item, i) => {
                        let style = ``
                        subTab === item.Tab ?
                        (style += `side-bar-active`)
                        :
                        (style += `side-bar-inactive`)
                        
                        return (
                            <li className="d-flex justify-content-center">
                                <button onClick={(e) => handleTab(item.Tab)} className={`side-bar-item ${style}`}>{item.Name}</button>
                            </li>
                        )
                    })
                    
                }
            </ul>
        </div>
    )
}