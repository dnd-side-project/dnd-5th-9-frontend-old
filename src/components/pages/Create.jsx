import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CreateForm from "../ui/organisms/CreateForm";
import BottomButton from "../ui/organisms/BottomButton";
import { useForm, useFormState } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Create = () => {
  const { register, handleSubmit, control, watch } = useForm();
  const { errors } = useFormState({ control });
  const location = useLocation();
  const history = useHistory();
  const [isPlaceOn, setIsPlaceOn] = useState(true);
  const watchFields = watch();

  !location.state && history.push("/"); // create 로 바로 접근시 홈으로 보내버림

  const handlePlaceClick = (event) => {
    event.preventDefault(); // ?? button 은 무조건 submit 취급?
    const { placeyn } = event.target.dataset;
    if (placeyn === "true") {
      setIsPlaceOn(true);
      return;
    }
    setIsPlaceOn(false);
  };

  const checkIsDone = () => {
    const { description, nickname, title } = watchFields;
    return description && nickname && title;
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    handleSendData(data);
  };

  // axios Post  나중에 따로 빼야함 ..
  const handleSendData = async (formData) => {
    const { title, description, nickname } = formData;
    const { startDateTimeStamp, endDateTimeStamp } = location.state;
    const data = {
      title,
      description,
      nickname,
      placeYn: isPlaceOn,
      startDate: startDateTimeStamp,
      endDate: endDateTimeStamp,
    };
    console.log("submit!", data);
    const response = await axios.post("/meetings", data);
    const id = response.data.data.meetingInfo.id;
    history.push(`/meetings/${id}`, { meetingData: response.data.data }); // response data 받아 private url 로 가게
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
                isPlaceOn && "border-blue-400 text-blue-400"
              }`}
              onClick={handlePlaceClick}
              data-placeyn={true}
            >
              필요해요
            </button>
            <button
              className={`flex items-center w-1/2 border-2 border-gray-300 justify-center p-5 ${
                !isPlaceOn && "border-blue-400 text-blue-400"
              }`}
              onClick={handlePlaceClick}
              data-placeyn={false}
            >
              다음에 받을래요
            </button>
          </div>
        </div>
        {checkIsDone() && (
          <BottomButton onClick={() => handleSubmit(onSubmit)}>
            선택 완료
          </BottomButton>
        )}
      </form>
    </div>
  );
};

export default Create;
