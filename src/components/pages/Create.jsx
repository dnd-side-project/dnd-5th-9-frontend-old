import React from "react";
import Calendar from "./../../UI/organisms/Calendar";

const Create = () => {
  return (
    <>
      <h1 className="text-center">언제부터 언제까지 가능하세요?</h1>
      <div className="flex justify-center">
        <Calendar />
      </div>
      <p className="text-center">임시 달력. 시간표 완성되면 대체 예정</p>
    </>
  );
};

export default Create;
