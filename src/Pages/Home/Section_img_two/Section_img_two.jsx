import React from 'react'
import "./Section_img_two.css"
import About from "../../../assets/Images/about1.jpg"
const Section_img_two = () => {
    return (
        <div className='bg-color'>
            <div className='container'>
                <div className='about'>
                    <div className='about-img'>
                        <img src={About} alt="" />
                    </div>
                    <div className='about-text'>
                        <h1>A COMPREHENSIVE TEACHING APPROACH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, autem voluptates. Autem dolorum deserunt neque iusto hic aspernatur cum ipsa at quae distinctio, consequatur, laudantium non magnam eius illum eos quis recusandae cumque eligendi voluptatum accusantium veritatis unde. Eligendi, velit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia nisi quas provident blanditiis! Repellendus totam amet, alias adipisci quibusdam sit velit sapiente eius recusandae rem, quod labore exercitationem voluptatum.</p>
                        <div className='incor'>
                            <a href="#about">Learn More</a>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Section_img_two