import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CreateForm from "../ui/organisms/CreateForm";
import BottomButton from "../ui/organisms/BottomButton";
import { useForm, useFormState } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Create = () => {
  const { register, handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });
  const location = useLocation();
  const history = useHistory();
  const [isSelected, setIsSelected] = useState(false);
  const [isDone, setIsDone] = useState(false); // is ?? Done ?

  const { startDateTimeStamp, endDateTimeStamp } = location.state;

  const handlePlaceClick = (event) => {
    event.preventDefault(); // ?? button 은 무조건 submit 취급?
    setIsSelected(!isSelected);
    setIsDone(!isDone);
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("submit!", data);
    // handleDatafetch();
  };

  // axios Post  나중에 따로 빼야함 ..
  const handleDatafetch = async () => {
    // 임시 데이터
    const data = {
      title: "모임 테스트입니다",
      description: "post 테스트",
      nickname: "안녕",
      placeYn: false,
      startDate: 1253145,
      endDate: 1253149,
    };

    const response = await axios.post("/meetings", data);
    console.log(response);
    history.push("/meeting"); // private url 로 가게
  };

  return (
    <div className="m-4">
      <h1 className="mt-8 text-2xl font-bold">
        모임 정보를
        <br />
        입력해주세요.
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register(item.name, item.validate)}
              ></input>
              <ErrorMessage
                errors={errors}
                name={item.name}
                render={({ message }) => (
                  <p className="text-red-600 text-xs">{message}</p>
                )}
              />
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
        {console.log(isDone)}
        {isDone && (
          <BottomButton onClick={() => handleSubmit(onSubmit)}>
            선택 완료
          </BottomButton>
        )}
      </form>
    </div>
  );
};

export default Create;
