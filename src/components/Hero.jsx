import React, { useEffect } from 'react';
import Container from './Container';
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
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/your-background-image.jpg')` }}>
      <Container className="py-[100px] md:py-[150px] lg:py-[150px] ">
        <div className="lg:mx-0 mx-[30px]">
          <div className="max-w-full md:max-w-[527px] h-auto px-4 md:px-0">
          <h4
            data-aos="fade-right"
            className="text-[18px] lg:text-start text-center  sm:text-[20px] md:text-[22px] font-Playfair font-medium text-white"
          >
            We’ve got your morning covered with
          </h4>

          <h1
            data-aos="fade-right"
            data-aos-duration="400"
            className="text-[80px] lg:text-start text-center sm:text-[120px] md:text-[150px] lg:text-[220px] leading-[1.1] font-Clicker font-normal text-white"
          >
            Coffee
          </h1>

          <p
            data-aos="fade-right"
            data-aos-duration="500"
            className="text-[16px] sm:text-[18px] lg:text-start text-center  md:text-[20px] text-white font-Playfair font-normal leading-[30px] md:leading-[34px] mt-4"
          >
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have.
            We provide the best for our customers.
          </p>

          <div data-aos="fade-right" data-aos-duration="200" className="mt-[30px] sm:mt-[40px] md:mt-[50px] flex justify-center lg:justify-normal">
            <a
              href="#"
              className="text-[14px] sm:text-[16px] font-Playfair bg-[#F9C06A] font-medium text-black py-[12px] sm:py-[15px] px-[25px] sm:px-[30px] rounded-3xl hover:bg-[#f9c06ace] duration-300 inline-block"
            >
              Order Now
            </a>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
