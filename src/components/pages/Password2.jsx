import React from "react";
import { Link } from "react-router-dom";

const Password2 = () => {
  return (
    <>
      <div className="mt-36 text-center">
        <img
          class="inline-block object-cover w-48 h-48 rounded-full"
          src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg"
          alt="Profile"
        />

        <p className="pt-4 text-xl font-bold">
          비밀번호 재설정 메일을
          <br />
          발송했어요!
        </p>

        <p className="pt-8">아래 주소로 발송된 이메일을 확인해주세요.</p>

        <p className="pt-2 text-blue-500 font-bold text-sm">
          5959hitmeup@hotmail.com
        </p>

        <Link to="/password3">
          <div className="m-4 mt-24">
            <button
              className="w-full h-12 text-indigo-100 text-xl font-bold transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600"
              type="submit"
            >
              확인
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Password2;
