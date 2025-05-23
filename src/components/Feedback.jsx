import Container from './Container'
import cottation from "../assets/“.png"
import sawwa from "../assets/sawwa.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormNextLink,GrFormPreviousLink  } from "react-icons/gr";


const Feedback = () => {
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div data-aos="fade-left" className={`absolute top-[50%] -translate-y-1/2 lg:text-[30px] text-[20px] lg:p-[20px] p-[10px] rounded-[5px] bg-[#F9C06A] lg:right-[242px] right-[-20px] cursor-pointer z-50`} style={{ ...style  }} onClick={onClick}>
            <GrFormNextLink/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div data-aos="fade-right" className={`absolute top-[50%] lg:left-[240px] left-[-20px] -translate-y-1/2 lg:text-[30px] text-[20px] lg:p-[20px] p-[10px] rounded-[5px] bg-[#F9C06A] z-50 cursor-pointer`} style={{ ...style}} onClick={onClick}>
        <GrFormPreviousLink/>
    </div>
  );
}
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
    const testimonials = [
        {
            name: "Jonny Thomas",
            role: "Project Manager",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        },
        {
            name: "Sarah Smith",
            role: "Coffee Enthusiast",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        },
        {
            name: "Mark Wilson",
            role: "Barista Trainer",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        },
    ];

    return (
        <div className='lg:py-[82px] lg:mx-0 mx-[30px]'>
            <Container>
                <div className="text-center">
                    <h4 data-aos="fade-up" className='lg:text-[54px] text-[33px] text-[#603809] font-Playfair font-bold'>Our coffee perfection feedback</h4>
                    <p data-aos="fade-up"  className='lg:text-[20px] text-[16px] text-[#707070] font-Playfair'>Our customers have amazing things to say about us</p>
                </div>
                <div className="slider-container">
                <Slider {...settings}   className="mt-[50px] lg:mx-0 mx-[30px]">
                    {testimonials.map((testimonial, index) => (
                        <div data-aos="fade-up" key={index}>
                            <div className="lg:w-[980px] w-full lg:h-[524px] mx-auto bg-[#FFF9F1] border-[#F9C06A] border-[1px] relative">
                                <div className="lg:mt-[54px] mt-[20px] ml-[29px]">
                                    <img src={cottation} alt="quote" />
                                </div>
                                <div className="lg:w-[780px] mx-auto mt-[20px] ">
                                    <div className="lg:mx-0 mx-[20px]">
                                        <p className='text-center lg:text-[18px] text-[14px] font-Playfair font-semibold text-[#707070]'>{testimonial.text}</p>
                                    </div>
                                    <div className="mt-[20px]">
                                        <h4 className='lg:text-[32px] text-[24px] text-[#603809] font-Playfair font-bold text-center'>{testimonial.name}</h4>
                                        <p className='lg:text-[20px] text-[16px] text-[#707070] font-Playfair text-center'>{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-[10px]">
                                    <img src={sawwa} alt="person" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                </div>
            </Container>
        </div>
    );
}

export default Feedback;
