import React from 'react';
import cupp from '../assets/cup.png';
import Container from './Container';

const AmazingMorning = () => {
  return (
    <div className="my-[82px] bg-center bg-cover bg-[url(./assets/Group_61.png)]">
      <div className="py-[54px] lg:mx-0 mx-[30px]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left max-w-md md:max-w-[585px]">
              <h3
                data-aos="fade-right"
                data-aos-duration="200"
                className="text-[32px] sm:text-[40px] md:text-[54px] font-Playfair font-bold text-white leading-tight"
              >
                Get a chance to have an
                <br />
                Amazing morning
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="400"
                className="text-[16px] sm:text-[18px] md:text-[20px] font-Playfair font-normal text-white mt-4 leading-relaxed"
              >
                We are giving you are one time opportunity to
                <br />
                experience a better life with coffee.
              </p>
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                className="mt-[30px]"
              >
                <a
                  href="#"
                  className="text-[14px] sm:text-[16px] font-Playfair bg-[#F9C06A] font-medium text-black py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300 inline-block"
                >
                  Order Now
                </a>
              </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="500" className="max-w-xs sm:max-w-sm md:max-w-none">
              <img src={cupp} alt="Cup" className="w-full h-auto" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AmazingMorning;
