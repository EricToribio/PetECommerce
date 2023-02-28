import { DogImageList, DogImageList2, images, netflixStyle } from "../utils/dog-pic-utils"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const SampleNextArrow= () => {
    return(
<a href="#section2" className="arrow__btn right-arrow">›</a>
    )
}
const SamplePrevArrow=() => {
    return(
        <a href="#section1" className="arrow__btn left-arrow">‹</a>
    )
}

export default ()=> {
    let i = 0
    let g = 1
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,

       
      };
    return (
        <Slider {...settings}>
            {DogImageList.map((item, index)=>{
                return (
                    <div>
                        <Image src={item.Image}/>
                    </div>
                )
            })}
  {/* <div>
  
                            {
                                    images(DogImageList2,i,g,'food2')}
                                    
      </div>
      <div>
      {
                                    images(DogImageList2,i+1,g+4,'food2')}
      </div>
      <div>{
      images(DogImageList2,i+1,g+4,'food2')}
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
        </Slider>
        // <div className="dog-body">
        //         <h1>Food</h1>
        //         <div className="media-container">
        //             <div className="media-scroller">
        //                 { DogImageList.map((item, index) =>{ 
        //                     if(i < DogImageList.length){
        //                         if(index !== 0){
        //                             g+=1
        //                             i+=4    
        //                         }
        //                         return(
        //                             images(DogImageList,i,g,'food') ,
        //                             )  
        //                         } 
        //                 })
        //                 }
                        
        //                 {/* <!-- Pagination Indicators --> */}
        //                 <div className="navigation-indicators">
        //                     {/* <!-- 4 Groups --> */}
                           
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        
    )
}