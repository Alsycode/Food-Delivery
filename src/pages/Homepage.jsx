import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import db from '../data/db.json';
import Chefschoice from '../components/chefsChoice';
import BestSellers from "../components/BestSellers"
import Title from '../components/Title';
import { NavLink } from 'react-router-dom';
function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = [...new Set(db.products.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState('All'); // Changed from category to selectedCategory for clarity

  // Filter items based on search term and selected category
  const filteredItems = db.products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || item.category === selectedCategory)
  );

  const [bestSellerItems, setBestSellerItems] = useState([]);
  useEffect(() => {
    // Assuming bestSellerItems should filter products with a specific property, e.g., isBestSeller
    // Since hasOwnProperty() was incomplete, I'll assume all products for now
    const filteredBestSellers = db.products; // Modify this if there's a specific best-seller property
    setBestSellerItems(filteredBestSellers);
    console.log("filt", filteredBestSellers);
  }, []);

  return (
    <div className="mt-3 mb-3">
      <BestSellers />
      <Chefschoice />
      <div className='w-full'>
        <div className='my-10 flex flex-col gap-4'>
          <div className='text-center py-8 text-3xl'>
            <Title text1={"OUR EXQUISITE"} text2={" MENU"} />
          </div>
          {/* Rendering category tabs */}
          <div className='flex justify-evenly items-center overflow-scroll'>
           
          <button 
                          onClick={() => setSelectedCategory("All")}className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                 <span className="absolute inset-0 overflow-hidden rounded-full">
                   <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                 </span>
                 <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 " style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
                   <span>
          All
                   </span>
                   <svg
                     fill="none"
                     height="16"
                     viewBox="0 0 24 24"
                     width="16"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M10.75 8.75L14.25 12L10.75 15.25"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="1.5"
                     />
                   </svg>
                 </div>
                 <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
               </button>
            {categories.map((item, index) => (
              <div
                key={index}
                className=" rounded-[15px] px-4 py-2  cursor-pointer "
                onClick={() => setSelectedCategory(item)}
              >
              
                         <button key={index}
                          onClick={() => setSelectedCategory(item)}className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                 <span className="absolute inset-0 overflow-hidden rounded-full">
                   <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                 </span>
                 <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 " style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
                   <span>
           {item}
                   </span>
                   <svg
                     fill="none"
                     height="16"
                     viewBox="0 0 24 24"
                     width="16"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M10.75 8.75L14.25 12L10.75 15.25"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="1.5"
                     />
                   </svg>
                 </div>
                 <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
               </button>
                      
              </div>
            ))}
          </div>
          {/* Rendering filtered products */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6'>
            {filteredItems.slice(0, 4).map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <NavLink 
                        to="/menu" >
                          <button className='bg-[#df810d] mt-4 px-5 py-2 rounded-[20px] text-white font-bold text-xl'>
EXPLORE FULL MENU
</button>
                        </NavLink>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;