import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CreateForm from "../ui/organisms/CreateForm";
import BottomButton from "../ui/organisms/BottomButton";

const Create = () => {
  const location = useLocation();
  const { startDateTimeStamp, endDateTimeStamp } = location.state;
  const [isSelected, setIsSelected] = useState(true);
  const [isDone, setIsDone] = useState(false); // is ?? Done ?
  const handlePlaceClick = () => {
    setIsSelected(!isSelected);
    setIsDone(!isDone);
  };
  console.log(location.state);
  return (
    <div className="m-4">
      <h1 className="mt-8 text-2xl font-bold">
        모임 정보를
        <br />
        입력해주세요.
      </h1>

      <form onSubmit={(event) => event.preventDefault()}>
        {CreateForm.map((item, index) => {
          return (
            <div key={index}>
              <label className="font-bold pt-6 pb-2 block">
                {item.label}
                {!item.require && (
                  <span className="font-normal"> (선택사항)</span>
                )}
              </label>

              <p className="text-xs text-gray-400">{item.message}</p>

              <input
                className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              ></input>
            </div>
          );
        })}
        <div className="block">
          <label className="font-bold block my-5">모임 시간</label>
          <div className="">
            <div className="w-full p-2 flex justify-between border-2 border-gray-400 items-center">
              <label className="font-bold block">시작 시간</label>
              <div className="flex items-center justify-center">
                <TimePicker showSecond={false} minuteStep={30} />
                <span className="ml-1"> 부터</span>
              </div>
            </div>
            <div className="w-full p-2 flex justify-between border-2 border-gray-400 items-center">
              <label className="font-bold block">종료 시간</label>
              <div className="flex items-center justify-center">
                <TimePicker showSecond={false} minuteStep={30} />
                <span className="ml-1"> 까지</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="font-bold block my-5"> 중간 장소 추천</label>
          <div className="flex w-full border-2 border-gray-300">
            <button
              className={`flex items-center w-1/2 border-2 border-gray-300 justify-center p-5 ${
                isSelected && "border-blue-400 text-blue-400"
              }`}
              onClick={handlePlaceClick}
            >
              필요해요
            </button>
            <button
              className={`flex items-center w-1/2 border-2 border-gray-300 justify-center p-5 ${
                isSelected && "border-blue-400 text-blue-400"
              }`}
              onClick={handlePlaceClick}
            >
              다음에 받을래요
            </button>
          </div>
        </div>
      </form>
      {console.log(isDone)}
      {isDone && <BottomButton>선택 완료</BottomButton>}
    </div>
  );
};

export default Create;
