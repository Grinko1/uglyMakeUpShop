import React, { useState } from 'react';
import style from  './Slider.module.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Slider = () => {
  const sliderData = 
  { slides:[
    {
    image: "https://static.sephora.ru/files/images/banner_dp/part_0/3/4330/orig.jpg"
  },
{
  image:'https://iledebeaute.ru/files/images/banner_dp/part_0/14/18334/preview_960_382.jpg'
},
{
  image:'https://iledebeaute.ru/files/images/banner_dp/part_0/14/18292/preview_960_382.jpg'
}, 
{
  image: 'https://iledebeaute.ru/files/images/banner_dp/part_0/14/18181/preview_960_382.jpg'
}]}
const{slides} = sliderData
const [current, setCurrent] = useState(0)
const length =slides.length

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1)
}
console.log(current);

if(!Array.isArray(slides) || slides.length <= 0) {
  return null
}
  return (
    <div className={style.slider}>
      <FaArrowAltCircleLeft className={style.left} onClick={prevSlide}/>
      <FaArrowAltCircleRight className={style.right} onClick={nextSlide}/>
      {
        slides.map((slide, index) => {
          return (
            <div className={index === current ? 'style.activeSlide' : 'style.slide'} key={index}>
              {
                index === current && (<img src={slide.image}  alt={'slider'} className={style.image}/>)
              }
              
            </div>
          )
          
        })
      }
    </div>
  );
};

export default Slider;
