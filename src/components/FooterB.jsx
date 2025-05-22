import React from 'react'
import Container from './Container'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterB = () => {
  return (
    <div>
      <div>
        <div className="bg-[url(./assets/fotter.png)]">
          <div className="bg-[#442808c2] pt-[182px] pb-16">
            <Container>
              <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 gap-4 mx-8 lg:mx-0 ">
                {/* Column 1 */}
                <div
                  data-aos="zoom-in"
                  data-aos-duration="200"
                  className="lg:text-start text-center"
                >
                  <h3 className="text-[54px] font-Clicker font-normal text-white mb-5">
                    Bean Scene
                  </h3>
                  <p className="text-[14px] font-Playfair leading-[22px] font-normal text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="flex justify-center lg:justify-normal gap-x-5 pt-5">
                    <a href="#">
                      <FaFacebook className="text-[30px] text-white" />
                    </a>
                    <a href="#">
                      <FaInstagram className="text-[30px] text-white" />
                    </a>
                    <a href="#">
                      <FaTwitter className="text-[30px] text-white" />
                    </a>
                    <a href="#">
                      <FaYoutube className="text-[30px] text-white" />
                    </a>
                  </div>
                </div>

                {/* Column 2 */}
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="lg:text-start text-center lg:pl-[66px]"
                >
                  <h4 className="text-[26px] font-Playfair font-bold text-white mb-14">
                    About
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        Menu
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        News & Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        Help & Supports
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  className="lg:text-start text-center lg:pl-[66px]"
                >
                  <h4 className="text-[26px] font-Playfair font-bold text-white mb-14">
                    Company
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        How we work
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        Terms of service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  className="lg:text-start text-center lg:pl-[66px]"
                >
                  <h4 className="text-[26px] font-Playfair font-bold text-white mb-14">
                    Contact Us
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        +1 202-918-2132
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        beanscene@mail.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[18px] leading-[42px] font-Playfair text-white">
                        www.beanscene.com
                      </a>
                    </li>
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
