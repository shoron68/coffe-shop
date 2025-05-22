import React from 'react'
import Container from './Container'

const Footer = () => {
    return (
        <div className='pt-[82px]'>
            <div className="bg-[url(./assets/Group_46.png)] bg-cover bg-center bg-no-repeat py-[80px]">
                <Container>
                    <div className="">
                        <div className="">
                            <h3 data-aos="zoom-in" data-aos-duration="400" className='text-[54px] font-Playfair font-bold text-[#fff] text-center'>Subscribe to get the Latest News</h3>
                            <p data-aos="zoom-in" data-aos-duration="400" className='text-[20px] font-Playfair font-normal text-[#fff] text-center'>Don’t miss out on our latest news, updates, tips and special offers</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="400" className="flex justify-center  mt-[40px]">
                            <input type="text" placeholder='Enter your mail' className='py-[17px] focus:not-visited: rounded-tl-[5px] rounded-bl-[5px] pl-[30px] w-[500px] bg-[#E9E4DD] font-Playfair focus:outline-none' />
                            <button className='py-[17px] px-[30px] bg-[#F9C06A] text-[#6A400F] font-Playfair rounded-tr-[5px] rounded-br-[5px] cursor-pointer'>Suscribe</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer