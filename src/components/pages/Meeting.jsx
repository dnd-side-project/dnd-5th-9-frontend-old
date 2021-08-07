import React, { useState } from "react";
import { FaEllipsisV, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Meeting = () => {
  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl font-bold">
          출발하실 위치를
          <br />
          검색해주세요.
        </h1>
        <p className="text-gray-400 text-sm mt-3 font-light">
          <span className="text-red-400 mr-2 font-medium">TIP</span>
          가능한 시간에 드래그해서 시간을 추가해주세요!
        </p>
      </div>

      <hr className="my-8" />

      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center">
          <p className="text-xl font-bold">DND 5959팀 3번째 모임</p>
          <p className="text-xs mx-2 font-light text-white bg-yellow-400 p-1 px-2 rounded-xl">
            진행중
          </p>
        </div>
        <FaEllipsisV />
      </div>

      <p className="text-sm font-light text-gray-400 my-2 mx-4">
        🔥 모임 가능한 날 입력 고고! 런칭 가보자고
      </p>

      <div className="mt-8 mb-4 border-4 border-gray-100"></div>

      <div className="grid grid-cols-2">
        <div>
          <p className="text-center text-gray-300">text</p>
          <hr className="mt-4 border" />
        </div>

        <div>
          <p className="text-center text-blue-400">text</p>
          <hr className="mt-4 border -blue-400 border-blue-400" />
        </div>
      </div>

      <div className="mx-6">
        <div className="flex justify-between items-center mt-16">
          <FaAngleLeft />
          <p className="font-bold">2021년 7월</p>
          <FaAngleRight />
        </div>

        {/* 시간표 */}
        <div></div>
      </div>
    </>

    // <div className="">
    //   <button onClick={() => setPage(Meeting1)}>Meeting1</button>
    //   <button onClick={() => setPage(Meeting2)}>Meeting2</button>
    //   <button onClick={() => setPage(Meeting3)}>Meeting3</button>

    //   {/*children 을 사용하여 버튼으로 지정된 컴포넌트를 받아옴.*/}
    //   <div children={page} />
    // </div>
  );
};

export default Meeting;
