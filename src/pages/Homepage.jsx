import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import db from '../data/db.json';
import Chefschoice from '../components/chefsChoice';
import BestSellers from "../components/BestSellers"
function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = [...new Set(db.products.map(item => item.category))];
  const filteredItems = db.products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'All' || item.category === filterCategory)
  );

  return (
    <div className=" mt-3 mb-3">

      <BestSellers/>
     <Chefschoice/>
    </div>
  );
}

export default HomePage;