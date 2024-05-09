import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import apple from '../../assets/m/apple.png';
import appleplay from '../../assets/m/appleplay.png';
import covered from '../../assets/m/covered.png';
import home from '../../assets/m/home.png';
import services from '../../assets/m/services.png';

const firstSet = [apple, appleplay, covered];
const secondSet = [home, services];

const Stores = () => {
  const [currentSet, setCurrentSet] = useState(1);

  const handleNextClick = () => {
    if (currentSet < 2) {
      setCurrentSet(currentSet + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  let imagesToShow;
  switch (currentSet) {
    case 1:
      imagesToShow = firstSet;
      break;
    case 2:
      imagesToShow = secondSet;
      break;
    default:
      imagesToShow = [];
  }

  return (
    <div className="relative ml-4">
      <div className='grid grid-cols-3 gap-3 mt-10' style={{ minWidth: `${imagesToShow.length * 250}px` }}>
        {imagesToShow.map((image, index) => (
          <img key={index} src={image} alt={`Item ${index}`} className='rounded-3xl overflow-x-auto' />
        ))}
      </div>
      <div className='absolute top-25 left-0 mt-5'>
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevClick} className='text-gray-500 text-3xl cursor-pointer ml-4' />
      </div>
      <div className='absolute top-25 right-0 mt-3'>
        <FontAwesomeIcon icon={faChevronRight} onClick={handleNextClick} className='text-gray-500 text-3xl cursor-pointer mr-4' /> 
      </div>
      <div className='ml-4 font-bold text-2xl mt-10'>
        <p >Special Stores.<span className='text-black text-opacity-50'> Exclusive savings for education, businesses,and more.</span></p>
      </div>
    </div>
  );
};

export default Stores;
