import Container from './Container'

const Nav = () => {
  return (
    <div className="bg-transparent"> 
      <div className='py-[30px]'>
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className='text-[35px] font-Clicker font-normal text-[#fff]'>Bean Scene</h2>
          </div>
          <div className="">
            <ul className='flex gap-x-15'>
              <li><a href="#" className='text-[14px] font-Playfair font-medium text-[#fff] hover:text-[#F9C06A] duration-300'>Home</a></li>
              <li><a href="#" className='text-[14px] font-Playfair font-medium text-[#fff]  hover:text-[#F9C06A] duration-300'>Menu</a></li>
              <li><a href="#" className='text-[14px] font-Playfair font-medium text-[#fff] hover:text-[#F9C06A] duration-300'>About Us</a></li>
              <li><a href="#" className='text-[14px] font-Playfair font-medium text-[#fff] hover:text-[#F9C06A] duration-300'> Contact Us</a></li>
            </ul>
          </div>
          <div className="">
            <div className="flex gap-x-5">
              <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300 '>Sign Up</a>
              <a href="#" className='text-[16px] font-Playfair bg-[#F9C06A] font-medium text-[#000] py-[10px] px-[20px] rounded-3xl hover:bg-[#f9c06ace] duration-300 '>Sign in</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </div>
  )
}

export default Nav