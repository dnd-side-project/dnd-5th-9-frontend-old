import React, { useEffect } from "react";
import PlaceSearch from "./../api/PlaceSearch";
import { Link } from "react-router-dom";
import { FaCrosshairs } from "react-icons/fa";
// 장소 선택
const Meeting2 = () => {
  // 마운트 될때 사용할수 있도록 useEffect 사용
  useEffect(() => {
    PlaceSearch();
  }, []);

  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl font-bold">
          출발하실 위치를
          <br />
          검색해주세요.
        </h1>

        <div className="relative text-gray-400 pt-8">
          <span className="absolute right-0 flex items-center p-1">
            <Link to="/meeting3" type="submit" className="p-1">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </Link>
          </span>
          <input
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
            name="email"
            placeholder="장소, 지하철, 주소를 검색해주세요."
          />
        </div>
      </div>
      <div className=" w-full h-screen" id="myMap"></div>
      <Link to="/meeting3">
        <div className="fixed bottom-0 right-0 z-10 bg-white p-4 m-6 rounded-full shadow-lg">
          <FaCrosshairs className="z-20 fixed bottom-0 right-0 m-8" />
        </div>
      </Link>
    </>
  );
};

export default Meeting2;
