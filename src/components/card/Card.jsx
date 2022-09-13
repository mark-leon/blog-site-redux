import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAuthorImage,
  filterAuthorName,
  filterCategory,
} from "../../redux/blog/actions";

const Card = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const categoryHandler = (value) => {
    dispatch(filterCategory(value));
  };
  const authorNameHandler = (value) => {
    dispatch(filterAuthorName(value));
  };
  const authorImageHandler = (value) => {
    dispatch(filterAuthorImage(value));
  };
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {state.map((blog) => (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={blog.image} alt="" />
          </div>

          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <span
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                  onClick={() => categoryHandler(blog.category)}
                >
                  {blog.category}
                </span>
              </p>
              <a href="#" className="block mt-1">
                <p className="text-xl font-semibold text-gray-900">
                  {blog.title}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img
                  onClick={() => authorImageHandler(blog.author_logo)}
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={blog.author_logo}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p
                  className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                  onClick={() => authorNameHandler(blog.author_name)}
                >
                  {blog.author_name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16">11 Jul, 2022</time>
                  <span aria-hidden="true">&middot;</span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
