import React from 'react'
import Container from './Container'
import coffe1 from "../assets/coffe1.png"

const CoffeStyle = () => {
    return (
        <div className='py-[82px]'>
            <Container>
                <div className="">
                    <h3 data-aos="fade-up" className='text-[54px] font-Playfair font-bold text-[#603809] text-center'>Enjoy a new blend of coffee style</h3>
                    <p data-aos="fade-up" className='text-[34px] font-Playfair font-normal text-[#707070] text-center mt-[16px]'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
                </div>
                <div className="mt-[32px]">

                    <div className="grid grid-cols-4 grid-rows-1 gap-4">
                        <div >
                            <div data-aos="zoom-in" data-aos-duration="100" className="w-[280px] h-[364px] bg-[rgba(249,192,106,0.45)] border-[#F9C06A] border-[1px] relative">
                                <img src={coffe1} className='w-full' alt="Coffee" />
                                <div className="mt-[10px]">
                                    <h4 className='text-[22px] text-[#603809] font-Playfair font-bold text-center'>Cappuccino</h4>
                                    <h5 className='text-[16px] text-[#1E1E1E] font-Playfair font-bold text-center py-[5px]'>Coffee 50% | Milk 50%</h5>
                                    <h5 className='text-[18px] text-[#603809] font-Playfair font-bold text-center'>$8.50</h5>
                                </div>
                                <div  className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 mb-[10px]">
                                    <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300'>
                                        Order Now
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div data-aos="zoom-in" data-aos-duration="300" className="w-[280px] h-[364px] bg-[rgba(249,192,106,0.45)] border-[#F9C06A] border-[1px] relative">
                                <img src={coffe1} className='w-full' alt="Coffee" />
                                <div className="mt-[10px]">
                                    <h4 className='text-[22px] text-[#603809] font-Playfair font-bold text-center'>Cappuccino</h4>
                                    <h5 className='text-[16px] text-[#1E1E1E] font-Playfair font-bold text-center py-[5px]'>Coffee 50% | Milk 50%</h5>
                                    <h5 className='text-[18px] text-[#603809] font-Playfair font-bold text-center'>$8.50</h5>
                                </div>
                                <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 mb-[10px]">
                                    <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300'>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="zoom-in" data-aos-duration="500" className="w-[280px] h-[364px] bg-[rgba(249,192,106,0.45)] border-[#F9C06A] border-[1px] relative">
                                <img src={coffe1} className='w-full' alt="Coffee" />
                                <div className="mt-[10px]">
                                    <h4 className='text-[22px] text-[#603809] font-Playfair font-bold text-center'>Cappuccino</h4>
                                    <h5 className='text-[16px] text-[#1E1E1E] font-Playfair font-bold text-center py-[5px]'>Coffee 50% | Milk 50%</h5>
                                    <h5 className='text-[18px] text-[#603809] font-Playfair font-bold text-center'>$8.50</h5>
                                </div>
                                <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 mb-[10px]">
                                    <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300'>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="zoom-in" data-aos-duration="700" className="w-[280px] h-[364px] bg-[rgba(249,192,106,0.45)] border-[#F9C06A] border-[1px] relative">
                                <img src={coffe1} className='w-full' alt="Coffee" />
                                <div className="mt-[10px]">
                                    <h4 className='text-[22px] text-[#603809] font-Playfair font-bold text-center'>Cappuccino</h4>
                                    <h5 className='text-[16px] text-[#1E1E1E] font-Playfair font-bold text-center py-[5px]'>Coffee 50% | Milk 50%</h5>
                                    <h5 className='text-[18px] text-[#603809] font-Playfair font-bold text-center'>$8.50</h5>
                                </div>
                                <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 mb-[10px]">
                                    <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300'>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default CoffeStyle