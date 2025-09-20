import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { setToken, navigate, backendUrl, token } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let response;

      if (currentState === "Sign Up") {
        response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
      }

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        toast.success(
          currentState === "Sign Up"
            ? "Account created successfully!"
            : "Login successful!"
        );

        // redirect user after login/signup
        navigate("/");
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || error.message || "Server error!"
      );
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token, navigate])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      {/* Header */}
      <div className="inline-flex items-center gap-2 mt-10">
        <p className="prata-regular text-2xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Name field only for Sign Up */}
      {currentState === "Sign Up" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-3 py-2 border border-gray-800 rounded"
          type="text"
          placeholder="Name"
          required
        />
      )}

      {/* Email */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-2 border border-gray-800 rounded"
        type="email"
        placeholder="Email"
        required
      />

      {/* Password */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-2 border border-gray-800 rounded"
        type="password"
        placeholder="Password"
        required
      />

      {/* Links */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-blue-600"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-blue-600"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 rounded cursor-pointer hover:bg-gray-800"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
