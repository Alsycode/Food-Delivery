import React, { useEffect, useState } from 'react';
import Title from './Title';
import ProductCard from './ProductCard';

const BestSellers = ({ products }) => {
  const [bestSellerItems, setBestSellerItems] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filteredItems = products.filter((item) => item.bestseller);
      setBestSellerItems(filteredItems);
      console.log('Filtered Best Sellers:', filteredItems);
    }
  }, [products]);

  console.log('Products:', products);
  console.log('Best Seller Items:', bestSellerItems);

  return (
    <div className="my-10">
      <div className="text-center py-8">
        <Title text1="BEST" text2="SELLERS" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellerItems.length > 0 ? (
            bestSellerItems.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">No best sellers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;