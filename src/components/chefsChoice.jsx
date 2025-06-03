import React, { useEffect, useState } from 'react'
import db from '../data/db.json';
import Title from './Title';
import ProductCard from './ProductCard';
const Featured = () => {
    const [bestSellerItems,setBestSellerItems] = useState([]);
    useEffect(() => {
        const filteredItems = db.products.filter((item) => item.hasOwnProperty('chefsChoice'));
        setBestSellerItems(filteredItems)
        console.log("filt",filteredItems); 
      }, []);
  return (
<div className='my-10'>
<div className='text-center py-8 text-3xl'>
<Title text1={"CHEF'S"} text2={" CHOICE"}/>

</div>
{/* redndering product */}
<div className='flex justify-center'>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-4 gap-y-6'>
{
  bestSellerItems?.map((item, index)=>(
    <ProductCard  item={item}/>
  ))
} 
   </div>
</div>

    </div>
  )
}

export default Featured