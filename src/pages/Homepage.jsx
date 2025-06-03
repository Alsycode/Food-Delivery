import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import db from '../data/db.json';
import Chefschoice from '../components/chefsChoice';
import BestSellers from "../components/BestSellers";
import Title from '../components/Title';
import { NavLink } from 'react-router-dom';
import { CarouselCustomArrows } from '../components/Carousal';
import { useNavigate } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
// import Testimonial21 from '../components/Tetsimonial';

function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const weather = useSelector((state) => state.cart.weather);
  const menuSectionRef = useRef(null); // Create a ref for the menu section

  const categories = [...new Set(db.products.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  // Filter items based on search term and selected category
  const filteredItems = db.products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || item.category === selectedCategory)
  );

  // Function to scroll to the menu section
  const scrollToMenu = () => {
    menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-3 mb-1">
      <div className="hero h-[600px] md:min-h-screen ">
        <div className="flex flex-col justify-between items-center md:flex-row-reverse">
          <img
            src="/noodlebowl.png"
            className="w-[350px] md:w-[400px] mb-8 md:mb-1 lg:w-[450px] rounded-lg"
          />
          <div className='mb-8 md:mb-1 text-center md:text-left'>
            <p className="font-bold">Enjoy your delicious Meal</p>
            <h1 className="lg:text-5xl text-2xl md:text-3xl py-6">
              Discover delicious, healthy <br/>meal that nourishes you.
            </h1>
            <button className="btn bg-[#df810d]" onClick={scrollToMenu}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      {weather === 'rainy' && (
        <div className="text-center text-lg text-yellow-600 flex justify-center items-center gap-2">
          <span role="img" aria-label="rain">🌧️</span>
          <span>Rainy weather: Please note deliveries may take 15 minutes longer.</span>
        </div>
      )}
      <BestSellers />
      {weather === 'rainy' && (
        <div className="text-center text-lg text-yellow-600 flex justify-center items-center gap-2">
          <span role="img" aria-label="rain">🌧️</span>
          <span>Rainy weather: Please note deliveries may take 15 minutes longer.</span>
        </div>
      )}
      <Chefschoice />
      <div className='w-full'>
        <div className='my-10 flex flex-col gap-4'>
          <div className='text-center py-8 text-3xl' ref={menuSectionRef}>
            <Title text1={"OUR EXQUISITE"} text2={" MENU"} />
          </div>
          {weather === 'rainy' && (
            <div className="text-center text-lg text-yellow-600 flex justify-center items-center gap-2">
              <span role="img" aria-label="rain">🌧️</span>
              <span>Rainy weather: Please note deliveries may take 15 minutes longer.</span>
            </div>
          )}
          {/* Rendering category tabs */}
          <div className='flex justify-evenly items-center overflow-scroll'>
            <button 
              onClick={() => setSelectedCategory("All")}
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10" style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
                <span>All</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
            {categories.map((item, index) => (
              <div
                key={index}
                className="rounded-[15px] px-4 py-2 cursor-pointer"
                onClick={() => setSelectedCategory(item)}
              >
                <button
                  onClick={() => setSelectedCategory(item)}
                  className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10" style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
                    <span>{item}</span>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
            ))}
          </div>
          {/* Rendering filtered products */}
          <div className='w-full flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 gap-y-6'>
              {filteredItems.slice(0, 4).map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <NavLink to="/menu">
              <button className='bg-[#df810d] mt-4 px-5 py-2 rounded-[20px] text-white font-bold text-xl'>
                EXPLORE FULL MENU
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <HowItWorks/>
      {/* <Testimonial21/> */}
    </div>
  );
}

export default HomePage;