import React from 'react'
import image from "../assets/coffee_blast2.png"
import benas from "../assets/img1.png"
import rank from "../assets/img2.png"
import cofffe from "../assets/img3.png"
import price from "../assets/img4.png"
import Container from './Container'

const Different = () => {
    return (
        <div className='py-[82px] relative'>
            <div className="absolute top-[10px] right-0 ">
                <img src={image} alt="" />
            </div>
            <Container>
                <div className="">
                    <h2 data-aos="fade-up" className='text-[54px] font-Playfair font-bold text-[#603809] text-center'>Why are we different?</h2>
                    <p data-aos="fade-up" className='text-[34px] font-Playfair font-normal text-[#707070] text-center mt-[16px]'>We don’t just make your coffee, we make your day!</p>
                </div>
                <div className="pt-[32px]">
                    <div  className="grid grid-cols-4 grid-rows-1 gap-4">
                        <div className="">
                            <div data-aos="zoom-in" data-aos-duration="100" className="w-[280px] h-[284px] bg-[#FFF9F1] hover:bg-[#FFEED8] duration-300">
                                <div className="flex justify-center pt-[36px]">
                                    <img src={benas} alt="" />
                                </div>
                                <div className="mt-[20px]">
                                    <h4 className='text-[28px] font-Playfair font-bold text-[#603809] text-center'>Supreme Beans</h4>
                                    <p className='text-[20px] font-Playfair font-bold text-[#707070] text-center'>Beans that provides<br/>
                                        great taste</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div data-aos="zoom-in" data-aos-duration="300" className="w-[280px] h-[284px] bg-[#FFF9F1] hover:bg-[#FFEED8] duration-300">
                                <div className="flex justify-center pt-[36px]">
                                    <img src={rank} alt="" />
                                </div>
                                <div className="mt-[20px]">
                                    <h4 className='text-[28px] font-Playfair font-bold text-[#603809] text-center'>High Quality</h4>
                                    <p className='text-[20px] font-Playfair font-bold text-[#707070] text-center'>We provide the <br/>
highest quality</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div data-aos="zoom-in" data-aos-duration="500" className="w-[280px] h-[284px] bg-[#FFF9F1] hover:bg-[#FFEED8] duration-300">
                                <div className="flex justify-center pt-[36px]">
                                    <img src={cofffe} alt="" />
                                </div>
                                <div className="mt-[20px]">
                                    <h4 className='text-[28px] font-Playfair font-bold text-[#603809] text-center'> Extraordinary </h4>
                                    <p className='text-[20px] font-Playfair font-bold text-[#707070] text-center'>Coffee like you have <br/>
never tasted</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div data-aos="zoom-in" data-aos-duration="700" className="w-[280px] h-[284px] bg-[#FFF9F1] hover:bg-[#FFEED8] duration-300">
                                <div className="flex justify-center pt-[36px]">
                                    <img src={price} alt="" />
                                </div>
                                <div className="mt-[20px]">
                                    <h4 className='text-[28px] font-Playfair font-bold text-[#603809] text-center'>Affordable Price</h4>
                                    <p className='text-[20px] font-Playfair font-bold text-[#707070] text-center'>Our Coffee prices are <br/>
easy to afford</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className="mt-[40px]">
                    <p data-aos="fade-up"  className='text-[20px] text-[#707070] font-Playfair font-normal text-center'>Great ideas start with great coffee, Lets help you achieve that</p>
                    <h4 data-aos="zoom-in"  className='text-[#603809] text-[30px] font-Playfair font-bold text-center'>Get started today.</h4>
                    <div data-aos="zoom-in" className="mt-[10px] flex justify-center">
                            <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[15px] px-[40px] rounded-3xl hover:bg-[#f9c06ace] duration-300 '>
                                Join Us
                            </a>
                        </div>
                </div>
            </Container>
        </div>
    )
}

export default Different