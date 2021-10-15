import React, { useState } from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';



function App() {

  const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };


  return (
    <div>

      <h1>Categories</h1>

      <div className="left">
      <ImageSlider slides={SliderData} />;
      
      

      </div>


      <div className="right">
        
      </div>



    </div>
  );
}

export default App;
