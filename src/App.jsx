import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import imageOne from './image/1.jpg'
import imageTwo from './image/2.jpg'
import imageThree from './image/3.jpg'
import imageFour from './image/4.jpg'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const App = () => {
  // IMAGE SLIDE SHOW
  const [imgArray, setImgArray] = useState([
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
  ])
  const [index, setIndex] = useState(0)
  const [slideShowIndex, setSlideShowIndex] = useState(0)
  const imgDisplay = imgArray[slideShowIndex]
  const sliderImgDisplay = imgArray[index]

  function imgSlideShow() {
    if (slideShowIndex < imgArray.length - 1) {
      setSlideShowIndex(slideShowIndex + 1)
    } else {
      setSlideShowIndex(0)
    }
    clearInterval(intervelId)
  }
  const intervelId = setInterval(imgSlideShow, 3000)

  // IMAGE SLIDER

  function nextImage(params) {
    if (index < imgArray.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  function prevImage(params) {
    if (index > 0) {
      setIndex((prev) => prev - 1)
    } else {
      setIndex(imgArray.length - 1)
    }
  }
  return (
    // IMAGE SLIDESHOW

    //   <div className="image-box w-full h-full flex flex-col gap-4 items-center justify-center">
    //     <h1 className="[text-shadow:_0_2px_10px_#000] tracking-wide text-center text-white text-3xl">
    //       Image Slide Show
    //     </h1>
    //     <img
    //       src={imgDisplay}
    //       alt=""
    //       className="w-2xl aspect-video object-cover rounded-2xl"
    //     />
    //     <img src={imgDisplay} alt="" className="slide-show" />
    //   </div>

    // IMAGE SLIDER
    <div className="image-slider-container">
      <div className="image-box w-full h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="[text-shadow:_0_2px_10px_#000] text-center text-white text-3xl">
          Image Slider
        </h1>
        <div className="slider flex items-center gap-4">
          <i
            className="[box-shadow:_0_2px_10px_#000] text-3xl p-3 text-gray-700 bg-gray-300 rounded-full cursor-pointer"
            onClick={prevImage}
          >
            <FaArrowAltCircleLeft />
          </i>
          <img
            src={sliderImgDisplay}
            alt=""
            className="w-2xl aspect-video object-fill rounded-2xl"
          />
          <i
            className="[box-shadow:_0_2px_10px_#000] text-3xl p-3  text-gray-700 bg-gray-300 rounded-full cursor-pointer"
            onClick={nextImage}
          >
            <FaArrowAltCircleRight />
          </i>
          <img src={sliderImgDisplay} alt="" className="slide-show" />
        </div>
      </div>
    </div>
  )
}

export default App
