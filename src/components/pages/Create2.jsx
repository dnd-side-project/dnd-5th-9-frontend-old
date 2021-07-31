import React from "react";

const Create2 = () => {
  return (
    <>
      <h1 className="text-center">모임 정보 입력</h1>

      <form>
        <p>닉네임:</p>
        <input type="text" />

        <p>모임 이름</p>
        <input type="text" />

        <p>모임 설명</p>
        <input type="text" />
      </form>

      <h1>장소 등등</h1>
    </>
  );
};

export default Create2;
