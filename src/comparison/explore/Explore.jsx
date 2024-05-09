import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apple from '../../assets/mac/image/apple.jpg';
import compatibility from '../../assets/mac/image/compatibility.jpg';
import dream from '../../assets/mac/image/dream.jpg';
import durable from '../../assets/mac/image/durable.jpg';
import fast from '../../assets/mac/image/fast.jpg';
import hello from '../../assets/mac/image/hello.jpg';
import privacy from '../../assets/mac/image/privacy.jpg';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

const Explore = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <section className='ml-6'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={hello} className='rounded-3xl h-[450px] w-[300px]' alt="Your Image" />
                            <div style={{ position: 'absolute', top: '10%', left: '30%', transform: 'translate(-50%, -50%)', textAlign: 'top', color: 'white' }}>
                                <p className='font-medium text-xs '>Getting Started</p>
                            </div>
                            <div className='absolute top-[10%] left-[16%] text-white mt-2'>
                                <p className='font-medium'>Easy to use. Easy to love.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className='ml-6'>
                        <div className='relative inline-block'>
                            <img src={fast} className='rounded-3xl h-[450px] w-[300px]' />
                            <div className='text-white font-medium absolute top-[10%] '>
                                <p className='text-xs ml-8'>Performance and Battery Life</p>
                                <p className='ml-8'>Go fast. Go far.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className='ml-6'>
                        <div className='relative inline-block'>
                            <img src={dream} className='rounded-3xl h-[450px] w-[300px]' />
                            <div className='text-black absolute font-medium top-[10%]'>
                                <p className='ml-8 text-xs'>Mac and iPhone</p>
                                <p className='ml-8'>Dream team .</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className='ml-6'>
                        <div className='relative inline-block'>
                            <img src={durable} className='rounded-3xl h-[450px] w-[300px]' />
                            <div className='text-black absolute font-medium top-[10%]'>
                                <p className='ml-8 text-xs'>Mac and iPhone</p>
                                <p className='ml-8'>Dream team .</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className='ml-6'>
                        <div className='relative inline-block'>
                            <img src={apple} className='rounded-3xl h-[450px] w-[300px]' />
                            <div className='text-black absolute font-medium top-[10%]'>
                                <p className='ml-8 text-xs'>Mac and iPhone</p>
                                <p className='ml-8'>Dream team .</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className='ml-6'>
                        <div className='relative inline-block'>
                            <img src={privacy} className='rounded-3xl h-[450px] w-[300px]' />
                            <div className='text-black absolute font-medium top-[10%]'>
                                <p className='ml-8 text-xs'>Mac and iPhone</p>
                                <p className='ml-8'>Dream team .</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className='ml-6'>
                        <div className='relative inline-block'>
                            <img src={compatibility} className='rounded-3xl h-[450px] w-[300px]' />
                            <div className='text-black absolute font-medium top-[10%]'>
                                <p className='ml-8 text-xs'>Mac and iPhone</p>
                                <p className='ml-8'>Dream team .</p>
                            </div>
                        </div>
                    </section>
                </div>
                
            </Slider>

        </div>
    )
}

export default Explore;
