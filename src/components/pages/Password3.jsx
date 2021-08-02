import React from "react";
import { Link } from "react-router-dom";

const Password3 = () => {
  return (
    <>
      <div className="m-4">
        <h1 className="mt-8 text-2xl font-bold">이메일로 회원가입하기</h1>

        <p className="pt-2 text-sm text-gray-500">
          새로운 비밀번호를 입력해주세요.
        </p>

        <div className="justify-center">
          <div>
            <label className="font-bold pt-8 pb-2 block">새로운 비밀번호</label>
            <input
              className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
              name="new-password"
              placeholder="비밀번호를 입력해주세요"
            />
            <p className="text-xs text-gray-400">
              영문, 숫자를 포함한 6~10자로 입력해주세요.
            </p>
          </div>

          <div>
            <label className="font-bold pt-8 pb-2 block">비밀번호 재입력</label>
            <input
              className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
              name="new-password"
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </div>

          <Link to="/">
            <div className="pt-24">
              <button
                className="w-full h-12 text-indigo-100 text-xl font-bold transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600"
                type="submit"
              >
                비밀번호 변경
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Password3;
