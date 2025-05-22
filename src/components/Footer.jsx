import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='pt-[82px]'>
      <div className="bg-[url(./assets/Group_46.png)] bg-cover bg-center bg-no-repeat py-[80px]">
        <Container>
          <div className='lg:mx-0 mx-[30px]'>
            <div>
              <h3
                data-aos="zoom-in"
                data-aos-duration="400"
                className="text-3xl sm:text-4xl md:text-5xl font-Playfair font-bold text-white text-center"
              >
                Subscribe to get the Latest News
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="400"
                className="text-base sm:text-lg font-Playfair font-normal text-white text-center mt-2"
              >
                Don’t miss out on our latest news, updates, tips and special offers
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              className="flex justify-center items-center mt-10"
            >
              <input
                type="text"
                placeholder="Enter your mail"
                className="w-full sm:w-[400px] md:w-[500px] py-4 px-6 rounded-tl-md rounded-bl-md font-Playfair bg-[#E9E4DD] focus:outline-none"
              />
              <button
                className="w-full sm:w-auto py-4 lg:px-8 px-[2px] bg-[#F9C06A] text-[#6A400F] font-Playfair rounded-tr-md rounded-br-md cursor-pointer hover:bg-[#e6b75c] duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer
