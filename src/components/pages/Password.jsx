import React from "react";
import { Link } from "react-router-dom";

const Password = () => {
  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-xl font-bold">비밀번호 찾기</h1>

        <p className="pt-2 text-xs text-gray-500">
          가입시 사용한 이메일 주소를 입력하시면
          <br />
          비밀번호 재설정을 위한 안내 메일을 보내드릴게요!
        </p>

        <div className="justify-center">
          <div className="mt-8">
            <label className="font-bold pb-2 block">이메일</label>
            <input
              className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
              name="email"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          <Link to="/password2">
            <div className="pt-24">
              <button
                className="w-full h-12 text-indigo-100 text-xl font-bold transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600"
                type="submit"
              >
                메일 발송
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Password;
