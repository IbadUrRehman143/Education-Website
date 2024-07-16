import React from 'react'
import "./Section_img_5.css"
import Images1 from "../../../assets/Images/class-img1.jpg";
import Images2 from "../../../assets/Images/class-img2.jpg";
import Images3 from "../../../assets/Images/class-img3.jpg";
import IImage1 from "../../../assets/Images/brand1.png";
import IImage2 from "../../../assets/Images/brand2.png";
import IImage3 from "../../../assets/Images/brand3.png";
import IImage4 from "../../../assets/Images/brand4.png";
const Section_img_5 = () => {
    return (
        <div className='section5'>
            <div className='cont-box'>
                <div className='heading-5'>
                    <div className='heading-h1'>
                        <h1>TOP STORIES</h1>
                    </div>
                    <div heading-incor>
                        <a href=""> More Stories</a>
                    </div>
                </div>
                <div className='image-3-flex'>
                    <div>
                        <img src={Images1} alt="" />
                        <p>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</p>
                    </div>
                    <div>
                        <img src={Images2} alt="" />
                        <p>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</p>


                    </div>
                    <div>
                        <img src={Images3} alt="" />
                        <p>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</p>

                    </div>

                </div>
                <div className='hh'></div>
                <div className='heading-text'>
                    <h1>PROGRAMS WE OFFER </h1>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                </div>
                <div className="slider">
                    <div className="slides">
                        <img src={IImage1} alt="Slide 1" />
                        <img src={IImage2} alt="Slide 2" />
                        <img src={IImage3} alt="Slide 3" />
                        <img src={IImage4} alt="Slide 4" />

                        <img src={IImage1} alt="Slide 1" />
                        <img src={IImage2} alt="Slide 2" />
                        <img src={IImage3} alt="Slide 3" />
                        <img src={IImage4} alt="Slide 4" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_img_5