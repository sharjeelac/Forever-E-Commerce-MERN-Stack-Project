import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import axios from "axios";

Orders = () => {
  const { backendUrl, token, curreny } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        console.log("Token not Found");
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/orders/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItems.push(item);
          });
        });
        console.log(allOrdersItems);
        setOrderData(allOrdersItems.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base items-center font-medium">
                  {item.name}
                </p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {curreny}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size : {item.size}</p>
                </div>
                <p className="mt-2">
                  Date :{" "}
                  <span className="text-gray-400">
                    {new Date(item.updatedAt).toDateString()}
                  </span>{" "}
                </p>
                <p>
                  Payment Method :{" "}
                  <span className="text-gray-400">
                    {item.paymentMethod}
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="flex md:w-1/2 justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm sm:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border px-4 text-sm font-medium rounded-sm ">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
