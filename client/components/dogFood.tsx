import { DogImageList, images } from "../utils/dog-pic-utils"


export default ()=> {
    let i = 0
    let g = 1
    return (
        <div className="dog-body">
                <h1>Food</h1>
                <div className="media-container">
                    <div className="media-scroller">
                        { DogImageList.map((item, index) =>{ 
                            if(i < DogImageList.length){
                                if(index !== 0){
                                    g+=1
                                    i+=4    
                                }
                                return(
                                    images(DogImageList,i,g,'food') ,
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
    )
}