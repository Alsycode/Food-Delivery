import React from 'react'
import Title from "../components/Title"

const About = () => {
  return (
    <div className='flex flex-col justify-center mx-auto max-w-[1200px]'>
      <div className='text-2xl border-t pt-8 text-center'>
<Title text1={'ABOUT'} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src="" alt=''/>
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, labore dolorum delectus, eveniet enim iure non vitae voluptates blanditiis tempora iste ea eos magni praesentium unde minus quas quia explicabo sunt necessitatibus eligendi ipsa fuga odio. Expedita aliquam eos eaque voluptate quos corrupti nemo possimus temporibus quis, fuga rerum sunt deleniti? Dignissimos odio temporibus repudiandae saepe debitis perferendis aut quam consequatur obcaecati aliquam, modi alias suscipit accusamus officiis, cupiditate tempore doloremque reprehenderit eveniet! Non fuga nihil magni officia debitis, quaerat nostrum aut placeat? Esse laudantium ducimus fugiat voluptas dolorem totam aut autem repellat, eos mollitia enim harum, tempore officia sint.</p>

<b className='text-gray-800'>Our Mission</b>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel minus fugit dignissimos animi cum aliquam vero nihil impedit. Reiciendis, est reprehenderit architecto explicabo rem accusantium asperiores ut recusandae neque dignissimos totam ex deleniti? Earum, cumque porro! Labore reiciendis fugit sed libero dolor aperiam, nam, qui ratione assumenda nemo explicabo.</p>
</div>

      </div>
      <div className='text-4xl py-4'>
<Title text1={"WHY"} text2={"CHOOSE US"}/>
</div>
<div className='text-sm mb-20 flex flex-col md:flex-row'>
<div className='flex flex-col px-10 md:px-16 py-8 sm:py-20 gap-5 border'>
<b className='text-gray-800'>Quality Assurance:</b>
<p lassName='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
</div>
<div className='flex flex-col px-10 md:px-16 py-8 sm:py-20 gap-5 border'>
<b className='text-gray-800'>Convenience:</b>
<p lassName='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
</p>
</div>
<div className='flex flex-col px-10 md:px-16 py-8 sm:py-20 gap-5 border'>
<b className='text-gray-800'>Exceptional Customer Service</b>
<p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
</p>
</div>
</div>
{/* <NewsletterBox/> */}
    </div>
  )
}

export default About