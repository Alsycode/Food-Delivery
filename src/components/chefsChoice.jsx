import React, { useEffect, useState } from 'react';
import Title from './Title';
import ProductCard from './ProductCard';

const Featured = ({ products }) => {
  const [chefsChoiceItems, setChefsChoiceItems] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filteredItems = products.filter((item) => item.chefsChoice);
      setChefsChoiceItems(filteredItems);
      console.log('Filtered Chef\'s Choice:', filteredItems);
    }
  }, [products]);

  console.log('Products:', products);
  console.log('Chef\'s Choice Items:', chefsChoiceItems);

  return (
    <div className="my-10">
      <div className="text-center py-8">
        <Title text1="CHEF'S" text2="CHOICE" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefsChoiceItems.length > 0 ? (
            chefsChoiceItems.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">No Chef's Choice items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;