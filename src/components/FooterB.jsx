import React from 'react'
import Container from './Container'
import { FaFacebook,FaInstagram,FaTwitter ,FaYoutube   } from "react-icons/fa";


const FooterB = () => {
    return (
        <div>
            <div className="">
                <div className="bg-[url(./assets/fotter.png)]">
                    <div className="bg-[#442808c2] pt-[182px]">
                        <Container>

                            <div className="grid grid-cols-4 grid-rows-1 gap-4 ">
                                <div data-aos="zoom-in" data-aos-duration="200" >
                                    <div className="">
                                        <h3 className='text-[54px] font-Clicker font-normal text-[#fff]'>Bean Scene</h3>
                                        <p  className='text-[14px] font-Playfair leading-[22px] font-normal text-[#fff] pt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="flex pt-[20px] gap-x-[20px]">
                                        <a href="#">
                                            <FaFacebook className='text-[30px] text-[#fff]'/>
                                        </a>
                                        <a href="#">
                                            <FaInstagram  className='text-[30px] text-[#fff]' />
                                        </a>
                                        <a href="#">
                                            <FaTwitter   className='text-[30px] text-[#fff]' />
                                        </a>
                                        <a href="#">
                                            <FaYoutube   className='text-[30px] text-[#fff]'  />
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="300" className='ml-[66px]' >
                                    <h4 className='text-[26px] font-Playfair font-bold text-[#fff] mb-[55px]'>About</h4>
                                    <ul>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>Menu</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>Features</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>News & Blogs</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>Help & Supports</a></li>
                                    </ul>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="400" className='ml-[66px]'  >
                                    <h4  className='text-[26px] font-Playfair font-bold text-[#fff] mb-[55px]'>Company</h4>
                                    <ul>
                                        <li><a href="#"  className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>How we work</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>Terms of service</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>Pricing</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>FAQ</a></li>
                                    </ul>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="500" className='ml-[66px]'  >
                                    <h4  className='text-[26px] font-Playfair font-bold text-[#fff] mb-[55px]'>Contact Us</h4>
                                    <ul>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>+1 202-918-2132</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>beanscene@mail.com</a></li>
                                        <li><a href="#" className='text-[18px] leading-[42px] font-Playfair text-[#fff]'>www.beanscene.com</a></li>
                                    </ul>
                                </div>
                            </div>

                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterB