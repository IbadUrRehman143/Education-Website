import React from 'react'
import "./Section_img_three.css"
import Blog1 from "../../../assets/Images/blog1.jpg"
import Blog2 from "../../../assets/Images/blog2.jpg"
const Section_img_three = () => {
    return (
        <div className='bg2-color'>
            <div className='container'>
                <div className='heading-text'>
                    <h1>PROGRAMS WE OFFER </h1>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>

                </div>

                <div className='row'>
                    <div className='col6'>
                        <div className='blog-img'>
                        </div>
                        <div className='blog-caption'>
                            <h3> Faculty Of Science</h3>
                            <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                            <div className='lern'>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col7'>
                        <div className='blog-img'>
                        </div>
                        <div className='blog-caption'>
                            <h3> Faculty Of Science</h3>
                            <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                            <div className='lern'>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section_img_three