import React from "react";
import Progress from "./../ui/organisms/Progress";
import JoinForm from "./../ui/organisms/JoinForm";
import { Link } from "react-router-dom";
import Join2 from "./Join2";

const Join = () => {
  return (
    <>
      <Progress done="50" />
      <div className="m-4">
        <h1 className="mt-8 text-2xl font-bold">이메일로 회원가입하기</h1>

        <div className="justify-center">
          {JoinForm.map((input, key) => {
            return (
              <div key={key}>
                <label className="font-bold pt-6 pb-2 block">
                  {input.label}
                </label>
                <input
                  className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                  name={input.label}
                  placeholder={input.placeholder}
                />
                <p className="text-xs text-gray-400">{input.message}</p>
              </div>
            );
          })}

          <div className="pt-4">
            <label className="flex items-center float-left w-3/4">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="pl-2 text-gray-500">
                (필수) 서비스 이용약관에 동의
              </span>
            </label>
            <span className="float-right text-gray-300">보기</span>
          </div>

          <div className="pt-4">
            <label className="flex items-center float-left w-3/4">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="pl-2 text-gray-500">
                (필수) 개인정보 수집 및 이용에 동의
              </span>
            </label>
            <span className="float-right text-gray-300">보기</span>
          </div>

          <Link to="/join2">
            <div className="pt-24">
              <button
                className="w-full h-12 text-indigo-100 text-xl font-bold transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600"
                type="submit"
              >
                회원가입
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Join;
