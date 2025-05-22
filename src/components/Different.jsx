import React from 'react';
import image from '../assets/coffee_blast2.png';
import benas from '../assets/img1.png';
import rank from '../assets/img2.png';
import cofffe from '../assets/img3.png';
import price from '../assets/img4.png';
import Container from './Container';

const Different = () => {
  return (
    <div className="py-[60px] md:py-[82px] relative lg:mx-0 mx-[30px]">
      <div className="absolute top-[10px] right-0 z-0 lg:block hidden">
        <img src={image} alt="Decor" />
      </div>

      <Container>
        <div>
          <h2
            data-aos="fade-up"
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-Playfair font-bold text-[#603809] text-center"
          >
            Why are we different?
          </h2>
          <p
            data-aos="fade-up"
            className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] font-Playfair font-normal text-[#707070] text-center mt-[16px]"
          >
            We don’t just make your coffee, we make your day!
          </p>
        </div>

        <div className="pt-[32px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[{ img: benas, title: 'Supreme Beans', desc: 'Beans that provides\ngreat taste' },
              { img: rank, title: 'High Quality', desc: 'We provide the\nhighest quality' },
              { img: cofffe, title: 'Extraordinary', desc: 'Coffee like you have\nnever tasted' },
              { img: price, title: 'Affordable Price', desc: 'Our Coffee prices are\neasy to afford' }]
              .map((item, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-duration={`${100 + i * 200}`}
                  className="w-full max-w-[280px] h-auto bg-[#FFF9F1] hover:bg-[#FFEED8] duration-300 rounded-xl px-4 py-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <img src={item.img} alt={item.title} className="h-[80px] object-contain" />
                  </div>
                  <h4 className="text-[22px] sm:text-[24px] md:text-[28px] font-Playfair font-bold text-[#603809]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] font-Playfair font-bold text-[#707070] mt-2 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-[40px] text-center">
          <p
            data-aos="fade-up"
            className="text-[16px] sm:text-[18px] md:text-[20px] text-[#707070] font-Playfair font-normal"
          >
            Great ideas start with great coffee, Let's help you achieve that
          </p>
          <h4
            data-aos="zoom-in"
            className="text-[#603809] text-[22px] sm:text-[26px] md:text-[30px] font-Playfair font-bold mt-2"
          >
            Get started today.
          </h4>
          <div data-aos="zoom-in" className="mt-[14px] flex justify-center">
            <a
              href="#"
              className="text-[14px] sm:text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[12px] px-[30px] rounded-3xl hover:bg-[#f9c06ace] duration-300"
            >
              Join Us
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Different;
