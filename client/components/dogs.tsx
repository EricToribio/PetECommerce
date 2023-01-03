
import { BaseNextRequest } from 'next/dist/server/base-http'
import Image from 'next/image'
import img from '../img/adult-dry-chk-rc-vg.jpg'
import { DogImageList, imageType } from '../utils/dog-pic-utils'


export default () => {
    let i = 0
    let g = 1
    
const images= (item: imageType[], j : number, g :number ) => {

        for (let i = j; i < item.length; i++) {
            if (j === 0) {
                return (
                    <div className="media-group" id={`group-${g}`}>
                        <div className="media-element dog-img">
                            <Image src={item[0].Image} alt="" />
                            <h6>
                                {item[0].Description}
                            </h6>
                        </div>
                        <div className="media-element dog-img">
                            <Image src={item[1].Image} alt="" />
                            <h6>
                                {item[1].Description}
                            </h6>
                        </div>
                        <div className="media-element dog-img">
                            <Image src={item[2].Image} alt="" />
                            <h6>
                                {item[2].Description}
                            </h6>
                        </div>
                        <div className="media-element dog-img">
                            <Image src={item[3].Image} alt="" />
                            <h6>
                                {item[3].Description}
                            </h6>
                        </div>
                        <div className="media-element dog-img">
                            <Image src={item[4].Image} alt="" />
                            <h6>
                                {item[4].Description}
                            </h6>
                        </div>

                        <a className="next" href="#group-2" aria-label="next">
                            <svg>
                                <use href="#next"></use>
                            </svg>
                        </a>
                    </div>
                )
            } else {
               
                return (
                    <div className="media-group" id={`group-${g}`}>
                        <a className="previous" href={`#group-${g-1}`}>
                            <svg>
                                <use href="#previous"></use>
                            </svg>
                        </a>
                        <div className="media-element dog-img">
                            <Image src={item[j].Image} alt="" />
                            <h6>
                                {item[j].Description}
                            </h6>
                        </div> <div className="media-element dog-img">
                            <Image src={item[j+1]?.Image} alt="" />
                            <h6>
                                {item[(j + 1)]?.Description}
                            </h6>
                        </div> <div className="media-element dog-img">
                            <Image src={item[j + 2]?.Image} alt="" />
                            <h6>
                                {item[j + 2]?.Description}
                            </h6>
                        </div> <div className="media-element dog-img">
                            <Image src={item[i + 3]?.Image} alt="" />
                            <h6>
                                {item[j + 3]?.Description}
                            </h6>
                        </div> <div className="media-element dog-img">
                            <Image src={item[j + 4]?.Image} alt="" />
                            <h6>
                                {item[j + 4]?.Description}
                            </h6>
                        </div>
                        <a className="next" href={`#group-${g+1}`} aria-label="next">
                            <svg>
                                <use href="#next"></use>
                            </svg>
                        </a>
                    </div>
                )
            }

        }
}
    return (
        <div className="dog-container">

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
                                    images(DogImageList,i,g) ,
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
    )
}