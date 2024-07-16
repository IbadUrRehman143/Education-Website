import React from 'react'
import "./Section_mg_four.css"

const Section_mg_four = () => {
    return (
        <div className='section-four'>
            <div className="container">
                <div className='img-fours'>
                    <div className='section-four-flex'>
                        <div className="header-i">
                            <h1>Essential Resources</h1>
                            <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur metus, sed feugiat leo posuere.</p>
                        </div>
                        <div className='reso'>
                            <div className="resource">
                                <h2>First year students</h2>
                                <p>Integer efficitur metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                                <div className="arrow">&gt;</div>
                            </div>
                            <div className="resource">
                                <h3>Tuition & fees</h3>
                                <p>Integer efficitur metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                                <div className="arrow">&gt;</div>
                            </div>
                            <div className="resource" >
                                <h2>International students</h2>
                                <p>Integer efficitur metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                                <div className="arrow">&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-four-image"></div>
        </div>
    )
}

export default Section_mg_four