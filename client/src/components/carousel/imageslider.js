import React, {useState} from 'react';
import {Slides} from './slides';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './style.css';

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = Slides.length

    return (
            <section className="slider">

                <FaArrowAltCircleLeft className="left-arrow" />
                <FaArrowAltCircleRight className="right-arrow" />

            {Slides.map((slide, index) => {
                    return (
                        <img src={slide.image} alt="alt value" className="hero" />
                    )

                })
            }

            </section>
    )
}

export default ImageSlider
