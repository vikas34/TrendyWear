import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-orange-500 ">
        Subscribe now & get 20% instant discount!
      </p>
      <p className="text-gray-400 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste error
        nostrum dolorem. Animi soluta, enim cum corrupti suscipit porro quae!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded"
      >
        <input
          className="w-full sm:flex-1 outline-none "
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
          required
        />
        <button
          className="bg-black text-white px-10 py-4 text-xs rounded-right"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
