import React from 'react'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='px-4  bottom-0 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-screen'    style={{background:"#df810d"}}>
        <div className=' flex py-10 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div className='text-white'>
   <h1 className='text-3xl font-bold my-8 '>Yummm</h1>
    <p className='w-full md:w-2/3 '>When culinary artistry meets doorstep convenience.Savor handcrafted perfection, delivered with care.</p>
</div>
<div className='text-white'>
    <p className='text-xl  font-medium mb-5 '>COMPANY</p>
    <ul className=' flex flex-col gap-2 '>
      <li><Link href='/'>Home</Link></li>  
      <li> <Link href='/menu'>Menu</Link></li>
      <li> <Link href='/about'>About Us</Link></li>  
      <li>  <Link href='/contactus'>Contact Us</Link></li>  
         
       
      
       
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
<p className='text-center text-md py-10 '>Copyright 2025@yummm.com - All right reserved</p>
</div>
    </div>
  )}

export default Footer