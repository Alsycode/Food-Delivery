import React from 'react'
import Title from './Title'
const HowItWorks = () => {
  return (
    <div className='w-full min-h-screen text-center flex flex-col gap-8 p-5 '>
        <div className='text-center text-3xl font-bold'>
              <Title text1={"HOW IT"} text2={" WORKS"}/>  
        </div>
            <p>Discover how easy it is to order your favorite meals with our seamless food delivery service. Follow these simple steps to satisfy your cravings from the comfort of your home.</p>
<div className='flex flex-col md:flex-row justify-center gap-4'>
<div className='flex flex-col gap-3 justify-center items-center py-4 px-2'>
    <img src='/Illustration-1.png' alt='Select Restaurant' className='h-[150px] w-[350px]'/>
    <p className='font-bold text-gray-500'><span className='text-2xl text-black mr-1'>01</span>Select Restaurant</p>
    <p>Browse through a wide variety of local restaurants and cuisines to find the perfect spot for your next meal.</p>
</div>
<div className='flex flex-col gap-3 justify-center items-center'>
    <img src='/Illustration-2.png' alt='Select Menu' className='h-[150px] w-[350px]'/>
    <p className='font-bold text-gray-500'><span className='text-2xl text-black mr-1'>02</span>Select Menu</p>
    <p>Explore the restaurant's menu, customize your order, and add your favorite dishes to the cart with just a few clicks.</p>
</div>
<div className='flex flex-col gap-3 justify-center items-center'>
    <img src='/illustration-3.png' alt='Wait for Delivery' className='h-[150px] w-[350px]'/>
    <p className='font-bold text-gray-500'><span className='text-2xl text-black mr-1'>03</span>Wait for Delivery</p>
    <p>Sit back and relax while our delivery team brings your freshly prepared meal right to your door.</p>
</div>
</div>
    </div>
  )
}

export default HowItWorks