import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTitle } from "../../redux/blog/actions";

const Search = () => {
  const dispatch = useDispatch();
  const categoryHandler = (value) => {
    //console.log(value);
    dispatch(filterTitle("boost"));
  };
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(event) => categoryHandler(event.target.value)}
      />
      <img
        className="inline h-6 cursor-pointer"
        src="./assets/search.svg"
        alt="Search"
      />
    </div>
  );
};

export default Search;
