import { useRouter } from "next/router"
import { useEffect } from "react"




export default () => {
    const router = useRouter()
    const id = parseInt(router.query.id as string )
  
      
    useEffect(()=>{
        if(router.query.id !== undefined) {
            isNaN(id) &&
            router.push('/invalid')
        }
      
    })
    return(
        <div>
            <h1>{id}</h1>
        </div>

    )
}