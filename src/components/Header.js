import React, { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // Dispatch the cache action here where `json` is defined
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center space-x-4">
        <SlMenu
          className="text-2xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="yt-logo"
          className="h-12 cursor-pointer text-2xl"
        />
      </div>

      {/* Middle Section - Search Bar */}
      <div className="relative flex items-center w-1/2">
        <input
          className="px-5 w-full border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="p-3 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
          <FaSearch />
        </button>

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg border border-gray-200 rounded-lg max-h-64 overflow-y-auto z-10">
            <ul>
              {suggestions?.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex text-center"
                >
                  <FaSearch className="text-center m-2" /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section - User Icon */}
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-3xl cursor-pointer text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
