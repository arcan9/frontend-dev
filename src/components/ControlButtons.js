import React from "react";

export default function ControlButtons({ handleNext, handlePrev }) {
  return (
    <div className='controls'>
      <button type='button' onClick={handlePrev} className='button'>
        <i className='fa-solid fa-arrow-left' />
      </button>
      <button type='button' onClick={handleNext} className='button'>
        <i className='fa-solid fa-arrow-right' />
      </button>
    </div>
  );
}
