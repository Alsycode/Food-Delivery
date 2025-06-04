import React from 'react'
import ProductCard from '../components/ProductCard';
import db from '../data/db.json';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
const MenuPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const weather = useSelector((state) => state.cart.weather);
  const [products,setProducts] = useState([])
   useEffect(() => {
      fetch('https://jsondata-1-uc7k.onrender.com/products/')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => alert('Failed to load products: ' + err.message));},[])
  const categories = [...new Set(products.map(item => item.category))];
  const filteredItems = products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'All' || item.category === filterCategory)
  );
  console.log("xxxxxxxx",products)
  return (
    <div className=" mt-3 mb-3">
       <div className="flex flex-col sm:flex-row justify-between mb-4 ">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered mb-3"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="select select-bordered "
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
         {weather === 'rainy' && (
            <div className="text-center text-lg text-yellow-600 flex justify-center items-center gap-2 py-6">
              <span role="img" aria-label="rain">🌧️</span>
              <span>Rainy weather: Please note deliveries may take 15 minutes longer.</span>
            </div>
          )}
      <div className='flex justify-center'>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-base-content/70">No products found.</p>
        )}
      </div>
      </div> 
 
    </div>
  )
}

export default MenuPage