
import NonSSRWrapper from '../utils/NoSSR'
import { DogImageList, DogImageList2, images} from '../utils/dog-pic-utils'
import DogFood from './dogFood'
import DogFoodTest from './DogFoodTest'


export default () => {
    let i = 0
    let i2 = 0
    let g2 = 1
    let g = 1
    

    return (
        <NonSSRWrapper>
        <div className="dog-container">

                <DogFoodTest/>
            <DogFood/>
            <div className="dog-body">
                <h1>Food 2</h1>
                <div className="media-container">
                    <div className="media-scroller">
                        { DogImageList2.map((item, index) =>{ 
                            if(i < DogImageList2.length){
                                if(index !== 0){
                                    g2+=1
                                    i2+=4    
                                }
                                return(
                                    images(DogImageList2,i2,g2,'food2') ,
                                    )  
                                } 
                        })
                        }
                        
                        {/* <!-- Pagination Indicators --> */}
                        <div className="navigation-indicators">
                            {/* <!-- 4 Groups --> */}
                           
                        </div>
                    </div>
                </div>
            </div>
            <DogFoodTest/>
            <svg>
                <symbol id="next" viewBox="0 0 256 512">
                    <path fill="white"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </symbol>
                <symbol id="previous" viewBox="0 0 256 512">
                    <path fill="white"
                        d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                </symbol>
            </svg>

        </div>
        </NonSSRWrapper>
    )
}