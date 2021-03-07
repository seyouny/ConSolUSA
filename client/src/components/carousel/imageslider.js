import React, {useState} from 'react';
import {Slides} from './slides';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './style.css';

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = Slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(Slides) || Slides.length <= 0) {
        return null;
    }

    return (
            <section className="slider">

                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

            {Slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            
                            {
                            index === current && (<img src={slide.image} alt="alt value" className="heroImage" />)
                            }

                        </div>
                        )

                })
            }

            </section>
    )
}

export default ImageSlider
