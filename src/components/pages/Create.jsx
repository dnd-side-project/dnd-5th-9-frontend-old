import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Create1 from "./Create1";
import Create2 from "./Create2";

const Create = () => {
  const location = useLocation();
  const { startDateTimeStamp, endDateTimeStamp } = location.state;
  console.log(location.state);

  return (
    <div className="">
      <h1>
        모임 정보를
        <br />
        입력해주세요.
      </h1>

      <form>
        <input type="text" name="" id="" placeholder="닉네임을 입력해주세요." />
        <input
          type="text"
          name=""
          id=""
          placeholder="모임 이름을 입력해주세요."
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="모임 설명을 입력해주세요."
        />
        <input type="time" name="" id="" />
        <input type="time" name="" id="" />
        <input type="button" value="" />
        <input type="button" value="" />
      </form>
    </div>
  );
};

export default Create;
