import React from 'react'
import Title from "../components/Title"
const AboutUspage = () => {
  return (
    <div className='flex flex-col justify-center mx-auto max-w-[1200px]'>
    <div className='text-2xl border-t pt-8 text-center'>
<Title text1={'ABOUT'} text2={" US"}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src="https://imgs.search.brave.com/e6fIiwJfZw8LTYTF-hDPLtR3h31aSpWzByCQ-JM0pbM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MTAyLzU5OS9zbWFs/bC9kZWxpc2lvdXMt/YnVyZ2VyLW9uLXRo/ZS1wbGF0ZS1pc29s/YXRlZC1mcmVlLXBo/b3RvLmpwZw" alt='Delicious burger'/>
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>At Yummm, we’re passionate about connecting food lovers with the best local restaurants. Our mission is to make food delivery effortless, reliable, and delightful. Whether you're craving a hearty burger, a fresh salad, or exotic global cuisines, Yummm brings it all to your doorstep with just a few clicks. We partner with top restaurants to ensure every bite is a moment of joy, crafted with care and delivered with speed.</p>

<b className='text-gray-800'>Our Mission</b>
<p>Our mission at Yummm is to redefine food delivery by offering a seamless, customer-focused experience. We aim to empower local restaurants while providing you with a diverse selection of high-quality meals, delivered fresh and fast. Your satisfaction is at the heart of everything we do.</p>
</div>

    </div>
    
  </div>
  )
}

export default AboutUspage