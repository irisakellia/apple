import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import candy from '../../assets/images/candy.jpg';
import macbook from '../../assets/images/macbook.jpeg';
import ipads from '../../assets/images/ipads.jpg';
import mcpro from '../../assets/images/mcpro.jpg';
import newphoria from '../../assets/images/newphoria.jpg';
import padpro from '../../assets/images/padpro.jpg';
import sewatch from '../../assets/images/sewatch.jpg';
import titanium from '../../assets/images/titanium.jpg';
import ultra from '../../assets/images/ultra.jpg';
import visionpro from '../../assets/images/visionpro.png';
import wtches from '../../assets/images/wtches.jpg';

const firstSet = [candy, ipads, macbook, wtches]; 
const secondSet = [mcpro, newphoria, padpro, sewatch]; 
const thirdSet = [titanium, ultra, visionpro]; 

const Experience = () => {
  const [currentSet, setCurrentSet] = useState(1);

  const handleNextClick = () => {
    if (currentSet < 3) {
      setCurrentSet(currentSet + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSet > 1) {
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
    case 3:
      imagesToShow = thirdSet;
      break;
    default:
      imagesToShow = [];
  }

  return (
    <div className>
      
      <div className='grid grid-cols-4 gap-4'>
        {imagesToShow.map((image, index) => (
          <img key={index} src={image} className='rounded-3xl' alt={`Item ${index}`} />
        ))}
      </div>

     
      <div className='flex justify-center mt-3'>
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevClick} className='text-gray-500 text-3xl cursor-pointer' />
        <FontAwesomeIcon icon={faChevronRight} onClick={handleNextClick} className='text-gray-500 text-3xl cursor-pointer ml-4' />
      </div>
      <div>
        <p className='font-bold mt-4 text-2xl'><span className='text-orange-500'>Accessories. </span><span className='text-black text-opacity-50'>All Kinds of Mother's Day gifts for all Kinds of moms.</span></p>
      </div>
    </div>
  );
};

export default Experience;
