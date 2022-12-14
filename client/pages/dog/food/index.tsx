import Cookies from "js-cookie"
import router from "next/router"
import { useEffect } from "react"


export default () => {
useEffect(()=>{
    Cookies.set('dog Tab', 'food', {path : '/'})
    router.push('/dog')
},[])
}