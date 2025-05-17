import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "$"
  const [orders, setOrders] = useState([]);


  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/orders/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
        console.log(response.data.orders)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async(event, orderId)=>{
    try {
      const response = await axios.post(backendUrl + '/api/orders/status', {orderId, status:event.target.value}, {headers : {token}})
      if(response.data.success){
        await fetchAllOrders()
        toast.success('Status Updated')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div className="p-4 md:p-6">
  <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">🛒 Orders Overview</h2>
  {orders.length === 0 ? (
    <p className="text-gray-500">No orders found. Maybe everyone’s on a diet? 🥲</p>
  ) : (
    orders.map((order, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-5 md:p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          {/* Left: Order Icon and Items */}
          <div>
            <img
              src={assets.parcel_icon}
              alt="Order Icon"
              className="w-12 h-12 mb-3"
            />
            <div className="space-y-1">
              {order.items.map((item, i) => (
                <p key={i} className="text-gray-600">
                  {item.name} × {item.quantity} <span className="text-xs">({item.size})</span>
                </p>
              ))}
            </div>
          </div>

          {/* Middle: Address and Contact */}
          <div className="text-gray-600">
            <p className="font-semibold">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>{order.address.street}</p>
            <p>
              {order.address.city}, {order.address.state}, {order.address.country} -{" "}
              {order.address.zipcode}
            </p>
            <p className="mt-1">📞 {order.address.phone}</p>
          </div>

          {/* Right: Order Details */}
          <div className="space-y-1">
            <p>🧾 Items: {order.items.length}</p>
            <p>💳 Payment: {order.payment ? "✅ Done" : "⌛ Pending"}</p>
            <p>📦 Method: {order.paymentMethod}</p>
            <p>📅 Date: {new Date(order.updatedAt).toDateString()}</p>
            <p className="font-bold text-lg text-green-700 mt-2">
              {currency}
              {order.amount}
            </p>
            <select onChange={(event)=>statusHandler(event, order._id)}
              defaultValue={order.status}
              className="mt-2 block w-full px-3 py-1.5 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="OrderPlaced">📥 Order Placed</option>
              <option value="Packing">📦 Packing</option>
              <option value="Shipped">🚚 Shipped</option>
              <option value="Out for delivery">🛵 Out for delivery</option>
              <option value="Delivered">✅ Delivered</option>
            </select>
          </div>
        </div>
      </div>
    ))
  )}
</div>

  );
};

export default Orders;
