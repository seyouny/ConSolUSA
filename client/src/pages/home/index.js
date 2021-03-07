// HOME/LANDING PAGE

import React from 'react';
import './style.css';
import logo from './logowhite-min.png';
import Border from './divider_orange_blue.png';
import ImageSlider from '../../components/carousel/imageslider';
import { Slides } from '../../components/carousel/slides';

export default function HomePage() {

  return (

    <div>
      
          <ImageSlider slides={Slides} />

            <img className="herobrand" src={logo} alt="ConSol USA logo"></img>

          <div>
            <img src={Border} alt="border curve" className="border"></img>
          </div>

    </div>

  )
}