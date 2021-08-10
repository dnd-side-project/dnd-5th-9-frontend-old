import React, { useEffect, useState } from "react";
import MapSearchResult from "./../api/MapSearchResult";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaSubway } from "react-icons/fa";

// 결과 보기 -> result로 빼는게 낫나?
const Meeting3 = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl font-bold">
          출발하실 위치를
          <br />
          검색해주세요.
        </h1>

        <form className="inputForm" onSubmit={handleSubmit}>
          <div class="relative text-gray-400 pt-8">
            <span class="absolute right-0 flex items-center p-1">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
              name="email"
              placeholder="장소, 지하철, 주소를 검색해주세요."
              onChange={onChange}
              value={inputText}
            />
          </div>
        </form>
      </div>

      <div className="mt-4 mb-4 border-4 border-gray-100"></div>

      <div>
        <div className="grid grid-cols-8">
          <FaMapMarkerAlt className="m-3 mx-5 col-span-1 text-gray-400 text-xl" />
          <div className="col-span-5">
            <p className="">이디야 커피랩</p>
            <p className="text-gray-300 text-sm">서울 강남구 논현로 636</p>
          </div>
        </div>
        <p className="text-xs text-right mx-8 text-gray-300">07.14</p>
        <hr className="mt-2 mb-4" />
      </div>

      <div>
        <div className="grid grid-cols-8">
          <FaSubway className="m-3 mx-5 col-span-1 text-gray-400 text-xl" />

          <div className="col-span-5">
            <p className="">언주역 9호선 3번 출구</p>
            <p className="text-gray-300 text-sm">서울 강남구 논현로 636</p>
          </div>
        </div>
        <p className="text-xs text-right mx-8 text-gray-300">07.14</p>
        <hr className="mt-2 mb-4" />
      </div>

      <p className="text-center text-sm text-gray-300">검색 히스토리 삭제</p>
      <hr className="mt-4" />

      {/* <div className="flex justify-center items-center h-96 text-center text-gray-300">
        이전 검색 기록이 없어요
      </div> */}

      <MapSearchResult searchPlace={place} />
    </>
  );
};

export default Meeting3;
