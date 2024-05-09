// // import React from 'react'
// // import { useEffect,useState } from 'react'
// // import { useGSAP } from '@gsap/react';

// // import heroVideo from '../../assets/video/hero.mp4';
// // import smallHeroVideo from '../../assets/video/smallHero.mp4';
// // import gsap from 'gsap';


// // const Taskbar = () => {
// //   const [VideoSrc,SetVideoSrc] = useState(
// //     window.innerWidth<760 ? smallHeroVideo:heroVideo,
// //   );

// //   const handleVideoSrcSet = ()=>{
// //     if(window.innerWidth<760) SetVideoSrc(smallHeroVideo);
// //     else SetVideoSrc(heroVideo);
// //   };

// //   useEffect(()=>{
// //     window.addEventListener("resize",handleVideoSrcSet);
// //     return () => window.removeEventListener("resize",handleVideoSrcSet);
// //   },[]);

// //   useGSAP(()=>{
// //     gsap.to('#hero',{
// //         opacity:1,
// //         delay:2,
// //     });

// //     gsap.to('#cta',{
// //         opacity:1,
// //         y:-50,
// //         delay:2
// //     });
// //   },[]);
  
  
  
  
  
  
  
  
// //     return (
      
// //     <div>
// //       <section classname='nav-height relative w-full bg-black'>
// //         <div className='flex-center h-5/6 w-full flex-col'>

// //         <p id='hero' className='hero-title'>iPhone 15 pro</p>
// //         </div>
// //         <div className='w-9/12 md:w-10/12'>
// //           <video
// //           autoPlay
// //           muted
// //           playsInline
// //           key={VideoSrc}
// //           className='pointer-events-none'
// //           >
// //           <source src='VideoSrc' type='video/mp4'/></video>
// //         </div>


// //         <div
// //         id="cta"
// //         className="flex translate-y-20 flex-col items-center opacity-0"
// //       >
// //         <a href="#highlights" className="btn">
// //           Buy
// //         </a>
// //         <p className="text-xl font-normal">From $199/month or $999</p>
// //       </div>
// //     </section>
// //     </div>
// //   )
// // }

// // export default Taskbar
// import React, { useEffect, useState } from "react";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import  heroVideo  from "../../assets/video/hero.mp4";
// import  smallHeroVideo  from "../../assets/video/smallHero.mp4";

// const Hero = () => {
//   const [videoSrc, setVideoSrc] = useState(
//     window.innerWidth < 760 ? smallHeroVideo : heroVideo,
//   );

//   const handleVideoSrcSet = () => {
//     if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
//     else setVideoSrc(heroVideo);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleVideoSrcSet);

//     return () => window.removeEventListener("resize", handleVideoSrcSet);
//   }, []);

//   useGSAP(() => {
//     gsap.to("#hero", {
//       opacity: 1,
//       delay: 2,
//     });

//     gsap.to("#cta", {
//       opacity: 1,
//       y: -50,
//       delay: 2,
//     });
//   }, []);

//   return (
//     <section className=" relative w-full bg-black">
//       <div className=" h-96 w-full flex-row">
//         <p  className="text-yellow-100 font-medium text-xl flex items-center justify-center  ">
//           iPhone 15 Pro
//         </p>

//         <div className="w-full h-4/5">
//           <video
//             autoPlay
//             muted
//             playsInline
//             key={videoSrc}
//             className=""
//           >
//             <source src={videoSrc} type="video/mp4" />
//           </video>
//         </div>
//       </div>

//       <div className="bg-blue-600 text-white  p-2 px-6 flex
//     rounded-3xl  justify-center ">
//         <button className=" no-underline text-sm"> Buy </button>
        
        
//       </div>
//       <div className=" flex justify-center items-center text-yellow-100" >
//       <p>From $199/month or $999</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import heroVideo from "../../assets/video/hero.mp4";
import smallHeroVideo from "../../assets/video/smallHero.mp4";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  
 

  return (
    <section className="relative w-full bg-black">
      <div className="h-96 w-full flex-row">
        <p className="text-yellow-100 font-medium text-xl flex items-center justify-center">
          iPhone 15 Pro
        </p>

        <div className="w-full h-4/5">
          <video autoPlay muted playsInline key={videoSrc} className="">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex justify-center">
  <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm hover:bg-transparent">Buy</button>
</div>


      <div className="flex justify-center items-center text-yellow-100">
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
