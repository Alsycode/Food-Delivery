import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../components/Title';

function OrderConfirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderDetails = state?.orderDetails || { items: [], total: '0.00', orderDate: '' };

  return (
    <div className="p-4 w-[100%] flex flex-col justify-center items-center">
      <div className="text-2xl font-bold mb-4">
        <Title text1={"ORDER"} text2={" CONFIRMATION"} />
      </div>
      <div className="card w-[90%] md:w-[70%] bg-base-100 dark:bg-gray-700 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Thank You for Your Order!</h2>
          <p className="">Order placed on: {orderDetails.orderDate}</p>
          <h3 className="text-lg font-semibold mt-4">Order Summary</h3>
          {orderDetails.items.length === 0 ? (
            <p className="text-base-content/70">No items in order.</p>
          ) : (
            <ul>
              {orderDetails.items.map(item => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="text-xl font-bold mt-4">Total: Rs. {orderDetails.total}</p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary mt-4"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;