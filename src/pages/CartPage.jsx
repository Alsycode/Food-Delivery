import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem, clearCart } from '../store/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    dispatch(clearCart());
    alert('Checkout successful! Thank you for your order.');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-base-content/70">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="card bg-base-100 dark:bg-gray-700 shadow-xl mb-4">
              <div className="card-body flex flex-row justify-between items-center">
                <div>
                  <h3 className="card-title">{item.name}</h3>
                  <p>Rs. {item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    className="btn btn-outline btn-sm"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    className="btn btn-outline btn-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="btn btn-error btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: Rs. {total.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="btn btn-success mt-2"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;