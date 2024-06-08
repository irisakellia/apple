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
