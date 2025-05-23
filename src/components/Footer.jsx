import React from 'react'


const Footer = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-screen'    style={{background:"#df810d"}}>
        <div className=' flex py-10 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div className='text-white'>
   <h1 className='text-3xl font-bold my-8 '>Yummm</h1>
    <p className='w-full md:w-2/3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corporis illum nesciunt dolor repellat rerum et tempore asperiores? Dignissimos, atque eveniet at officia voluptate mollitia eius repellat exercitationem, delectus vitae beatae optio voluptatibus distinctio. Reprehenderit veniam mollitia consequuntur assumenda rerum.</p>
</div>
<div className='text-white'>
    <p className='text-xl  font-medium mb-5 '>COMPANY</p>
    <ul className=' flex flex-col gap-2 '>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Menu</li>
    </ul>

</div>
<div className='text-white'>
    <p className='text-xl mb-5 font-medium '>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 '>
<li>+98995882822</li>
<li>yummm@yummm.com</li>
    </ul>
</div>

        </div>
        <div>
    <hr className='text-gray-600'/>
<p className='text-center text-md py-10 '>Copyright 2025@sinh.com - All right reserved</p>
</div>
    </div>
  )}

export default Footer