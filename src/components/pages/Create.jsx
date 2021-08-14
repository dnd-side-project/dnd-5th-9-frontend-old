import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CreateForm from "../ui/organisms/CreateForm";

const Create = () => {
  const location = useLocation();
  const { startDateTimeStamp, endDateTimeStamp } = location.state;
  console.log(location.state);
  return (
    <div className="m-4">
      <h1 className="mt-8 text-2xl font-bold">
        모임 정보를
        <br />
        입력해주세요.
      </h1>

      <form>
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
        <input type="time" name="" id="" step="3600" />
        <input type="time" name="" id="" />
        <input type="button" value="" />
        <input type="button" value="" />
      </form>
    </div>
  );
};

export default Create;
