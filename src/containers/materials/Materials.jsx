import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import exploreall from '../../assets/imagi/exploreall.jpg';
import haaaa from '../../assets/imagi/haaaa.jpg';
import miniyellow from '../../assets/imagi/miniyellow.jpg';
import nike from '../../assets/imagi/nike.jpg';
import sets from '../../assets/imagi/sets.jpg';
import storecard from '../../assets/imagi/storecard.jpg';
import woven from '../../assets/imagi/woven.jpg';
import wallets from '../../assets/imagi/wallets.jpg';
import silicone from '../../assets/imagi/silicone.jpg';
import printers from '../../assets/imagi/printers.jpg';

const firstSet = [printers, haaaa, miniyellow, nike];
const secondSet = [sets, storecard, woven, wallets];
const thirdSet = [silicone, exploreall];

const Materials = () => {
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
        <div>
            <div className='grid grid-cols-4 gap-4 h-auto w-auto relative mt-10'>
                {imagesToShow.map((image, index) => (
                    <div key={index} className="relative">
                        <img src={image} className='rounded-3xl' alt={`Item ${index}`} />
                        {/* <div className="absolute bottom-0 left-0 right-0 text-white bg-black bg-opacity-50 p-2">
                            
                            <p className="text-xs">APPLE PRODUCT</p>
                            <p className="text-xs">Just in your way</p>
                            
                        </div> */}
                    </div>
                ))}
                <div className='absolute top-0 left-0 mt-5'>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevClick} className='text-gray-500 text-3xl cursor-pointer ml-4' />
                </div>
                <div className='absolute top-0 right-0 mt-3'>
                    <FontAwesomeIcon icon={faChevronRight} onClick={handleNextClick} className='text-gray-500 text-3xl cursor-pointer mr-4' /> 
                </div>
            </div>
        </div>
    );
};

export default Materials;
