import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const onSubmitHandler = async (event) => {
    event.preventDefault();

  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mt-10">
        <p className="prata-regular text-2xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          className="w-full px-3 py-2 border border-gray-800 rounded"
          type="text"
          name=""
          id=""
          placeholder="Name"
          required
        />
      )}
      <input
        className="w-full px-3 py-2 border border-gray-800 rounded"
        type="email"
        name=""
        id=""
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800 rounded"
        type="password"
        name=""
        id=""
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px] ">
        <p>Forgot Your Password ? </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded cursor-pointer">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
Login;
