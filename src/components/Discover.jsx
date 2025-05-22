import React from 'react';
import Container from './Container';
import cup from "../assets/beens.png";
import overlay from "../assets/coffee_blast.png";

const Discover = () => {
  return (
    <div className="py-[60px] md:py-[82px] relative ">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:mx-0 mx-[30px]">
          {/* Left Content */}
          <div className="w-full lg:w-[585px] text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4
              data-aos="fade-right"
              data-aos-duration="400"
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-Playfair font-bold text-[#603809]"
            >
              Discover the best coffee
            </h4>
            <p
              data-aos="fade-right"
              data-aos-duration="400"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-Playfair font-normal text-[#707070] leading-[30px] md:leading-[34px] mt-4"
            >
              Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
            </p>
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              className="mt-[25px] sm:mt-[29px]"
            >
              <a
                href="#"
                className="text-[14px] sm:text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[12px] sm:py-[15px] px-[25px] sm:px-[30px] rounded-3xl hover:bg-[#f9c06ace] duration-300 inline-block"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="zoom-in" className="w-full max-w-[400px] lg:max-w-[500px]">
            <img src={cup} alt="Coffee Cup" className="w-full h-auto object-contain" />
          </div>
        </div>
      </Container>

      {/* Background Overlay Image */}
      <div className="absolute bottom-[-100px] lg:bottom-0 left-0 ">
        <img src={overlay} alt="Overlay" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Discover;
