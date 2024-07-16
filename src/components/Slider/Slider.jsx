import React from 'react'
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import{useState, useEffect} from 'react'
import './Slider.css'


import {sliderData} from './slider.data.js'

const Slider = () => {
  const [currentSlide, setCurrentSlide]= useState(0)

  // slideLength = 1 2 3 4 5
  // currentSlide = 0 1 2 3 4

  const autoScroll = true
  let slideInterval;
  let intervalTime = 5000

const nextSlide=()=>{
  setCurrentSlide(
    currentSlide === sliderData.lenght - 1 ? 0 : currentSlide + 1
  );

}

const prevSlide=()=>{
  setCurrentSlide(
    currentSlide === 0 ? sliderData.lenght - 1 : currentSlide - 1
  );

} 

function auto(){
  slideInterval = setInterval(nextSlide, intervalTime)
}
   useEffect(() => {
     setCurrentSlide(0);
   }, []);

    useEffect(() => {
      if (autoScroll){
        auto ()
      }
      return () => clearInterval(slideInterval)
    }, [currentSlide]);

  return (
    <div className="slider">
      <MdOutlineArrowCircleLeft className="arrow prev" onClick={prevSlide} />
      <MdOutlineArrowCircleRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button>Read more</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider
