import React from "react";
import { BsX } from "react-icons/bs";

const SharePopup = ({ onClose, onToastStart }) => {
  return (
    <div className="p-7 fixed bottom-0 left-0 h-58 w-full bg-white right-0">
      <div className="mb-3 w-full flex justify-between items-center text-2xl">
        <h3 className="font-bold">공유하기</h3>
        <BsX onClick={onClose} className="text-3xl" />
      </div>
      <hr />
      <ul>
        <li className="flex items-center mt-6 mb-4">
          <div className="rounded-full w-8 h-8 bg-yellow-300 mr-3"></div>
          <span className="cursor-pointer">카카오톡으로 공유하기</span>
        </li>
        <li className="flex items-center mb-4">
          <div className="rounded-full w-8 h-8 bg-blue-300 mr-3"></div>
          <span className="cursor-pointer">문자로 공유하기</span>
        </li>
        <li className="flex items-center mb-4">
          <div className="rounded-full w-8 h-8 bg-gray-300 mr-3"></div>
          <span className="cursor-pointer" onClick={onToastStart}>
            링크로 공유하기
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SharePopup;
