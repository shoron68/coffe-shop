import React from 'react'
import cupp from "../assets/cup.png"
import Container from './Container'

const AmazingMorning = () => {
    return (
        <div className='bg-[url(./assets/Group_61.png)] bg-center bg-cover my-[82px]'>
            <div className="py-[54px]">
                <Container>
                    <div className="flex justify-between items-center">
                <div  className="">
                    <h3 data-aos="fade-right" data-aos-duration="200" className='text-[54px] font-Playfair font-bold text-[#fff]'>Get a chance to have an<br />
                        Amazing morning</h3>
                    <p data-aos="fade-right" data-aos-duration="400" className='text-[20px] font-Playfair font-normal text-[#fff]'>We are giving you are one time opportunity to<br />
                        experience a better life with coffee.</p>
                    <div data-aos="fade-right" data-aos-duration="600" className="mt-[30px]">
                        <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300'>
                            Order Now
                        </a>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="">
                    <img src={cupp} alt="" />
                </div>
            </div>
                </Container>
            </div>
        </div>
    )
}

export default AmazingMorning