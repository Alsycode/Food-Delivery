import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { toast } from 'react-toastify';
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  console.log("Tags:", item);
const addToCart = (item) => {
  toast.success(`${item.name} added to cart`)
  dispatch(addItem(item))
}

  return (
    <div className="card  min-w-[280px]  max-w-[320px] shadow-sm border" >
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
  <h2 className="card-title font-bold text-2xl">{item.name}</h2>
<p>{item.description}</p>

  {/* Tags */}
  <div className="flex flex-wrap gap-1">
    {Array.isArray(item.tags) && item.tags.slice(0, 3).map((tag, index) => (
      <span
        key={index}
        className="inline rounded-md bg-green-50 px-1 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset max-w-30"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* <span className="inline-block mt-1 rounded-md bg-blue-50 px-1 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20 ring-inset max-w-30" style={{background:"#d0efe4",width:"content"}}>{item.category}</span> */}

  <div className=" flex justify-between  items-center mt-2">
  <h2 className='font-bold text-2xl'>Rs. {item.price.toFixed(2)}</h2>
    <button
      className="btn"
      style={{background:"#df810d"}}
      onClick={() => addToCart(item)}
    >
      Add to Cart
    </button>
  </div>
</div>
{item.category ? (<div className='absolute top-5 left-5 text-white font-semibold px-2 rounded-md'  style={{background:"#df810d"}}>
{item.category}
</div>) : ""}

    </div>
  );
};

export default ProductCard;