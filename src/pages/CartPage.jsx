import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeItem, clearCart } from '../store/cartSlice';
import Title from '../components/Title';
import { toast } from 'react-toastify';

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const weather = useSelector((state) => state.cart.weather);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const baseDeliveryTime = 30; // Base delivery time in minutes
  const deliveryTime = weather === 'rainy' ? baseDeliveryTime + 15 : baseDeliveryTime;

  const handleCheckout = () => {
    toast.success("Order successful");
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Store order details before clearing cart
    const orderDetails = {
      items: [...cartItems],
      total: total.toFixed(2),
      orderDate: new Date().toLocaleString(),
      estimatedDelivery: `${deliveryTime} minutes`,
    };
    dispatch(clearCart());
    // Navigate to order confirmation page with order details
    navigate('/order-confirmation', { state: { orderDetails } });
  };

  const clearItems = () => {
    dispatch(clearCart());
    alert("Cart cleared");
  };

  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4"><Title text1={"ORDER"} text2={" SUMMARY"}/></div>
      {cartItems.length === 0 ? (
        <p className="text-base-content/70">Your cart is empty.</p>
      ) : (
        <>
          <p className="text-lg mb-4">
            Estimated Delivery Time: {deliveryTime} minutes{' '}
            {weather === 'rainy' && (
              <span className="text-sm text-yellow-600">
                (+15 mins due to rainy weather)
              </span>
            )}
          </p>
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
              className="btn btn-success mt-2 mr-2"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearItems}
              className="btn btn-warning mt-2"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;