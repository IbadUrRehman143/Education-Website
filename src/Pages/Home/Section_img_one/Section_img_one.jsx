import React from 'react'
import "./Section_img_one.css"
const Section_img_one = (props) => {
  return (
    <div className="section-1" style={props.height}>
      <div className='container'>
        <div className='section-container'>
          <h3>
            {props.heading_optional}
          </h3>
          <h1>{props.heading_main}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, rem.adipisicing elit. Et, rem.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, rem.
          </p>
          <div className='button-section'>
            {props.include_button &&
              <button className='btn-section1'><a href="">Get Started Now</a></button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_img_one