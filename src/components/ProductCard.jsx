import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../store/cartSlice';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, canAddToCart } = useAuth();

  const addToCart = (item) => {
    if (!user) {
      toast.error('Please log in to add items to cart');
      navigate('/login');
      return;
    }
    if (!canAddToCart()) {
      toast.error('Admins cannot add items to cart');
      return;
    }
    if (!item?.name || !item?.price) {
      toast.error('Invalid item data');
      return;
    }
    toast.success(`${item.name} added to cart`);
    dispatch(addItem(item));
  };

  return (
    <div className="card w-full max-w-xs shadow-md border bg-white dark:bg-gray-800">
      <figure>
        <img
          src={item.image || 'https://via.placeholder.com/320x192?text=No+Image'}
          alt={item.name || 'Food item'}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title font-bold text-xl">{item.name || 'Unnamed Item'}</h2>
        <p className="">{item.description || 'No description available'}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {Array.isArray(item.tags) && item.tags.length > 0 ? (
            item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-600/20"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-500">No tags</span>
          )}
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="font-bold text-lg">
            Rs. {item.price ? item.price.toFixed(2) : 'N/A'}
          </div>
          <button
            className="btn btn-sm bg-[#e17e0f] text-white hover:bg-[#f37335]"
            onClick={() => addToCart(item)}
            aria-label={`Add ${item.name || 'item'} to cart`}
           
          >
            Add to Cart
          </button>
        </div>
      </div>
      {item.category && (
        <div
          className="absolute top-4 left-4 text-white font-semibold px-3 py-1 rounded-md bg-[#e17e0f]"
          aria-label={`Category: ${item.category}`}
        >
          {item.category}
        </div>
      )}
    </div>
  );
};

export default ProductCard;