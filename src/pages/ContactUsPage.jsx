import React from 'react'
import Title from '../components/Title'


const Contact = () => {
  return (
    <div>
      <div className='text-2xl pt-10 border-t text-center'>
<Title text1={"CONTACT"} text2={" US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row pb-28 justify-center gap-10 '>
<img className='w-full md:max-w-[480px]' src="https://imgs.search.brave.com/e6fIiwJfZw8LTYTF-hDPLtR3h31aSpWzByCQ-JM0pbM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MTAyLzU5OS9zbWFs/bC9kZWxpc2lvdXMt/YnVyZ2VyLW9uLXRo/ZS1wbGF0ZS1pc29s/YXRlZC1mcmVlLXBo/b3RvLmpwZw" alt="" />
     <div className='flex flex-col items-start justify-center gap-6'>
<p className='font-semibold text-xl text-gray-500'>Our Store</p>
<p className='text-gray-500'>54709 Willms Station<br/>
Suite 350, Washington, USA</p>
<p className='text-gray-500'>Tel: (415) 555-0132
  <br/>
Email: admin@yummm.com</p>
<p className='font-semibold text-xl text-gray-500'>Careers at Yummm</p>
<p className='text-gray-600'>Learn more about our teams and job openings.</p>
<button className='px-8 py-4 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500 text-gray-700'>Explore Jobs</button>
     </div>
      </div>
      
    </div>
  )
}

export default Contact