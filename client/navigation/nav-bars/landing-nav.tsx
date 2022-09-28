
import Image from 'next/image'
import logo from '../../static/img/toribio-ecommerce.png' 
export default () => {

    return(
        <div className='nav-container'>
           <Image width={250} height={100} src={logo} alt="Toribio's Ecom"/>
        </div>
    )
}