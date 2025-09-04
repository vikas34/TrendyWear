import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const { navigate } = useContext(ShopContext);

  // ---------- Delivery Info State ----------
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // ---------- Handle Input Change ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
  };

  // ---------- Check if all fields are filled ----------
  const isFormComplete = Object.values(deliveryInfo).every(
    (val) => val.trim() !== ""
  );

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/*---------Left Side------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm "
              type="text"
              name="firstName"
              value={deliveryInfo.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
              type="text"
              name="lastName"
              value={deliveryInfo.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>
          <div className="flex flex-col mt-2 mb-2 gap-2">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm "
              type="email"
              name="email"
              value={deliveryInfo.email}
              onChange={handleChange}
              placeholder="Email address"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm "
              type="text"
              name="street"
              value={deliveryInfo.street}
              onChange={handleChange}
              placeholder="Street"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm "
              type="text"
              name="city"
              value={deliveryInfo.city}
              onChange={handleChange}
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
              type="text"
              name="state"
              value={deliveryInfo.state}
              onChange={handleChange}
              placeholder="State"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm "
              type="number"
              name="zipcode"
              value={deliveryInfo.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
              type="text"
              name="country"
              value={deliveryInfo.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </div>
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm mt-2"
            type="number"
            name="phone"
            value={deliveryInfo.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
      </div>

      {/* ---------------Right Side-------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------------Payment Method Selection-------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer  rounded"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer  rounded"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              disabled={!isFormComplete}
              className={`px-10 py-3 rounded text-sm cursor-pointer transition ${
                isFormComplete
                  ? "bg-black text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              PLACE ORDER
            </button>

            {/* ---------- Notification ---------- */}
            {!isFormComplete && (
              <p className="text-red-500 text-xs mt-2 text-right">
                ⚠️ Please fill in all delivery details before placing your order.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
