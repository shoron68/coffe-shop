import React, { useEffect } from 'react'
import Container from './Container'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      once: false,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, []);
    return (
        <div className=''>
            <Container className="py-[189px] ">
                <div className="w-[527px] h-[456px]">
                    <h4 data-aos="fade-right" className='text-[22px] font-Playfair font-medium text-[#fff] '>We’ve got your morning covered with</h4>
                    <h1 data-aos="fade-right" data-aos-delay="700" className='text-[220px] font-Clicker font-normal text-[#fff] '>Coffee</h1>
                    <p data-aos="fade-right"  data-aos-delay="1000"  className='text-[20px] text-[#fff] font-Playfair font-normal leading-[34px]'>It is best to start your day with a cup of coffee. Discover the
                        best flavours coffee you will ever have. We provide the best
                        for our customers.</p>
                        <div data-aos="fade-right"className="mt-[50px]">
                            <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[15px] px-[30px] rounded-3xl hover:bg-[#f9c06ace] duration-300 '>
                                Order Now
                            </a>
                        </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero