import React from 'react';
import Container from './Container';
import coffe1 from '../assets/coffe1.png';

const CoffeStyle = () => {
  return (
    <div className="py-[60px] md:py-[82px]">
      <Container >
        <div className="lg:mx-0 mx-[30px]">
          <h3
            data-aos="fade-up"
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-Playfair font-bold text-[#603809] text-center"
          >
            Enjoy a new blend of coffee style
          </h3>
          <p
            data-aos="fade-up"
            className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] font-Playfair font-normal text-[#707070] text-center mt-[16px]"
          >
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>
        </div>

        <div className="mt-[32px] lg:mx-0 mx-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration={`${100 + index * 200}`}
                    className="w-full max-w-[280px] h-auto bg-[rgba(249,192,106,0.45)] border-[#F9C06A] border relative p-4 rounded-xl"
                  >
                    <img src={coffe1} className="w-full h-auto object-contain" alt="Coffee" />
                    <div className="mt-[10px] text-center">
                      <h4 className="text-[20px] sm:text-[22px] text-[#603809] font-Playfair font-bold">
                        Cappuccino
                      </h4>
                      <h5 className="text-[14px] sm:text-[16px] text-[#1E1E1E] font-Playfair font-bold py-[5px]">
                        Coffee 50% | Milk 50%
                      </h5>
                      <h5 className="text-[16px] sm:text-[18px] text-[#603809] font-Playfair font-bold">
                        $8.50
                      </h5>
                    </div>
                    <div className="mt-[14px] flex justify-center">
                      <a
                        href="#"
                        className="text-[14px] sm:text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoffeStyle;
