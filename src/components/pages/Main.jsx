import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Calendar from "./../ui/organisms/Calendar";

const Main = () => {
  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl font-bold">반가워요 👋</h1>
        <h1 className="mt-3 text-2xl font-bold">
          모임이 가능한
          <br />
          날짜를 선택해주세요.
        </h1>
      </div>
      <div className="mt-8 mb-4 border-4 border-gray-100"></div>

      <div className="mx-6">
        <Calendar />

        <div className="mt-16 bg-gray-500 h-24 text-center text-white">
          비회원 광고
        </div>
      </div>
    </>
  );
};

export default Main;
