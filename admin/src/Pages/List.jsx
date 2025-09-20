import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
  try {
    const response = await axios.post(
      backendUrl + "/api/product/remove",
      { id },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || error.message);
  }
};


  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-4 font-bold text-xl text-gray-800">📦 All Products</p>

      <div className="flex flex-col gap-4">
        {/* Table header for Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 bg-gray-200 text-sm font-semibold rounded">
          <b>Image</b>
          <b className="text-center">Name</b>
          <b className="text-center">Category</b>
          <b className="text-center">Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-3 flex flex-col md:grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-3 transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="flex justify-center md:block ">
              <img
                className="w-24 h-24 object-cover rounded-lg border"
                src={item.image[0]}
                alt={item.name}
              />
            </div>

            {/* Name + Category (Mobile) */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <p className="text-center text-base md:text-lg font-semibold text-gray-800">
                {item.name}
              </p>
              <p className="text-gray-500 text-sm md:hidden text-center ">
                {item.category}
              </p>
            </div>

            {/* Category (Desktop only) */}
            <div className="hidden md:flex justify-center items-center text-start text-gray-600">
              {item.category}
            </div>

            {/* Price */}
            <div className="flex justify-center items-center text-lg font-bold text-green-600">
              {currency}
              {item.price}
            </div>

            {/* Action */}
            <div className="flex justify-center items-center">
              <button onClick={()=>removeProduct(item._id)} className="px-3 py-1 cursor-pointer text-sm font-semibold bg-red-100 text-red-600 rounded-lg hover:bg-red-200 active:scale-95 transition">
                ✕ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
