import Image from 'next/image'
import  logo  from '../static/img/under-construction.png'

export default () => {

    return(
        <div className='d-flex justify-content-center mt-5  bg-dark h-100'>
            <Image src={logo} alt="Under Construction" />
        </div>
    )
}