import React from 'react'
import Container from './Container'
import cup from "../assets/beens.png"
import overlay from "../assets/coffee_blast.png"

const Discover = () => {
  return (
    <div className='py-[82px] relative'> 
        <Container>
            <div className="flex justify-between items-center">
                <div className="w-[585px] h-auto">
                    <h4 data-aos="fade-right" data-aos-duration="400"  className='text-[54px] font-Playfair font-bold text-[#603809]'>Discover the best coffee</h4>
                    <p data-aos="fade-right" data-aos-duration="400" className='text-[20px] font-Playfair font-normal text-[#707070] leading-[34px]'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                    <div data-aos="fade-right" data-aos-duration="400" className="mt-[29px]">
                            <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[15px] px-[30px] rounded-3xl hover:bg-[#f9c06ace] duration-300 '>
                                Order Now
                            </a>
                        </div>
                </div>
                <div data-aos="zoom-in" className="">
                    <img src={cup} alt="" />
                </div>
            </div>
        </Container>
        <div className=" absolute bottom-0 left-0">
            <img src={overlay} className='' alt="" />
        </div>
    </div>
  )
}

export default Discover